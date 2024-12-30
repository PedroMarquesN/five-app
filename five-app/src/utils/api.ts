import { apiRequest } from './apiRequest';

interface Upload {
  id: number;
  titulo: string;
  status: string;
  created_at: string;
  user: string;
  caminho: string;
}
interface UploadResponse {
  id: number;
  titulo: string;
  status: string;
  criado_em: string;
  user: string;
  caminho: string;
}
export interface Meta {
  total: number;
  page: number;
  limit: number;
}

interface FetchUploadsResponse {
  uploads: {
    id: number;
    titulo: string;
    status: string;
    criado_em: string;
    user: string;
    image: string;
  }[];
  meta: Meta;
}
interface ApiResponse {
  id: number;
  titulo: string;
  status: string;
  created_at: string;
  user: string;
  caminho: string;
}



const API_BASE_URL = 'http://five-api.test/';




export const fetchUploads = async (page = 1, limit = 5) => {
  try {
    const response = await apiRequest(`${API_BASE_URL}api/photos?page=${page}&limit=${limit}`);
    const data = response.data;
    return {
      uploads: data.map((upload: UploadResponse) => ({
        id: upload.id,
        titulo: upload.titulo,
        status: upload.status,
        criado_em: upload.criado_em,
        user: upload.user,
        image: `${API_BASE_URL}${upload.caminho}`,
      })),
      meta: response.meta as Meta,
    };
  } catch (error) {
    console.error('Erro ao buscar uploads:', error);
    throw error;
  }
};





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