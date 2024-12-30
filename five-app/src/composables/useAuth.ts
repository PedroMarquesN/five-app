import { ref } from 'vue';

interface LoginResponse {
  token?: string;
  is_admin?: number;
  message?: string;
}

interface RegisterResponse {
  message?: string;
}

export function useAuth() {
  const token = ref<string | null>(localStorage.getItem('token') ?? null);
  const isAdmin = ref<boolean>(localStorage.getItem('is_admin') === 'true');
  const isAuthenticated = ref<boolean>(!!token.value);

  const login = async (email: string, password: string): Promise<void> => {
    const response = await fetch('http://five-api.test/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data: LoginResponse = await response.json();
    if (response.ok && data.token) {
      token.value = data.token;
      const isAdminValue = data.is_admin === 1 ? 'true' : 'false';
      isAdmin.value = isAdminValue === 'true';

      localStorage.setItem('token', data.token);
      localStorage.setItem('is_admin', isAdminValue);
      isAuthenticated.value = true;
    } else {
      isAuthenticated.value = false;
      throw new Error(data.message ?? 'Usuário ou senha inválidos');
    }
  };

  const register = async (
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ): Promise<string> => {
    const response = await fetch('http://five-api.test/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation,
      }),
    });

    const data: RegisterResponse = await response.json();
    if (response.ok) {
      return data.message ?? 'Registro realizado com sucesso!';
    } else {
      throw new Error(data.message ?? 'Erro ao realizar o registro');
    }
  };

  const logout = (): void => {
    token.value = null;
    isAdmin.value = false;
    localStorage.removeItem('token');
    localStorage.removeItem('is_admin');
    isAuthenticated.value = false;
  };

  return {
    token,
    isAdmin,
    isAuthenticated,
    login,
    logout,
    register,
  };
}