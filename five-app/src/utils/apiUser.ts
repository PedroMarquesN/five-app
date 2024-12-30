
import { apiRequest } from "./apiRequest";

interface User {
    id: number;
    name: string;
    email: string;
    is_admin: boolean;
  }
interface Meta {
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

const API_BASE_URL = 'http://five-api.test/';
  

export const fetchUsers = async (page = 1, limit = 5) => {
    try {
      const response = await apiRequest(`${API_BASE_URL}api/users?page=${page}&limit=${limit}`);
      const data = response.data;
      return {
        users: data.map((user: User) => ({
          id: user.id,
          name: user.name,
          email: user.email,
          is_admin: user.is_admin,
        })),
        meta: response.meta as Meta,
      };
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      throw error;
    }
  };

  export const activateUser = async (id: number) => {
    try {
      await apiRequest(`${API_BASE_URL}api/users/${id}/activate`, 'PATCH');
      return id;
    } catch (error) {
      console.error('Erro ao ativar usuário:', error);
      throw error;
    }
  };
  
  export const deactivateUser = async (id: number) => {
    try {
      await apiRequest(`${API_BASE_URL}api/users/${id}/deactivate`, 'PATCH');
      return id;
    } catch (error) {
      console.error('Erro ao desativar usuário:', error);
      throw error;
    }
  };