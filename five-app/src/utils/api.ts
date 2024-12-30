import { apiRequest } from './apiRequest';

interface Upload {
  id: number;
  titulo: string;
  status: string;
  created_at: string;
  user: string;
  caminho: string;
}

const API_BASE_URL = 'http://five-api.test/';

export const fetchUploads = async () => {
    try {
      const response = await apiRequest(`${API_BASE_URL}api/photos`);
      const data = response.data; 
      return data.map((upload) => ({
        id: upload.id,
        titulo: upload.titulo,
        status: upload.status,
        criado_em: upload.criado_em,
        user: upload.user,
        image: `${API_BASE_URL}${upload.caminho}`,
      }));
    } catch (error) {
      console.error('Erro ao buscar uploads:', error);
      throw error;
    }
  };
interface ApiResponse {
    id: number;
    titulo: string;
    status: string;
    created_at: string;
    user: string;
    caminho: string;
}

export const approveUpload = async (id: number): Promise<number> => {
    try {
        await apiRequest(`http://five-api.test/api/photos/${id}/approve`, 'PATCH');
        return id;
    } catch (error) {
        console.error('Erro ao aprovar a foto:', error);
        throw error;
    }
};

export const rejectUpload = async (id: number) => {
  try {
    await apiRequest(`http://five-api.test/api/photos/${id}/reject`, 'PATCH');
    return id;
  } catch (error) {
    console.error('Erro ao rejeitar a foto:', error);
    throw error;
  }
};