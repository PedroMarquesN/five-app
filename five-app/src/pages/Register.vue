<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuth } from '../composables/useAuth.ts';

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

const { register } = useAuth();

const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    alert('As senhas não coincidem');
    return;
  }

  try {
    const message = await register(
      username.value,
      email.value,
      password.value,
      confirmPassword.value
    );
    alert(message);
    router.push('/login');
  } catch (error) {
    alert(error.message || 'Ocorreu um erro ao realizar o registro');
  }
};

const navigateToLogin = () => {
  router.push('/login');
};
</script>

<template>
  <div class="register-container">
    <div class="register-card">
      <div class="login-link">
        <span>Já possui conta? <a @click="navigateToLogin">Clique aqui</a></span>
      </div>
      <div class="register-title">Registrar</div>
      <form @submit.prevent="handleSubmit">
        <div class="input-group">
          <label for="username" class="input-label">Usuário</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="Digite seu usuário"
            required
            class="input-field"
          />
        </div>
        <div class="input-group">
          <label for="email" class="input-label">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Digite seu email"
            required
            class="input-field"
          />
        </div>
        <div class="input-group">
          <label for="password" class="input-label">Senha</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Digite sua senha"
            required
            class="input-field"
          />
        </div>
        <div class="input-group">
          <label for="confirmPassword" class="input-label">Confirme a Senha</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirme sua senha"
            required
            class="input-field"
          />
        </div>
        <div class="text-center">
          <button type="submit" class="register-button">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

.register-container {
  padding-top: 80px;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #6e7e7e, #b0b0b0);
  background-size: 400% 400%;
  animation: gradientAnimation 6s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.register-card {
  background-color: #fff;
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-80px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-link {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #333;
}

.login-link a {
  color: #ff6347;
  cursor: pointer;
  text-decoration: underline;
}

.login-link a:hover {
  color: #8f220f;
}

.register-title {
  font-family: 'Times New Roman', serif;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.input-group {
  margin-bottom: 1.5rem;
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
}

.input-field:focus {
  outline: none;
  border-color: #333;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.input-label {
  font-size: 1rem;
  color: #333;
  font-weight: bold;
}

.register-button {
  width: 100%;
  padding: 12px 16px;
  font-size: 1.2rem;
  background-color: #333;
  border: none;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.register-button:hover {
  background-color: #444;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.register-button:focus {
  outline: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
}

.text-center {
  text-align: center;
}
</style>
