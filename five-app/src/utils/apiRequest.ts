


interface ErrorResponse {
    message?: string;
}

export async function apiRequest(
    url: string,
    method: string = 'GET',
    body: any = null,
    additionalHeaders: Record<string, string> = {}
): Promise<any> {
    const token = localStorage.getItem('token');
    const headers: Record<string, string> = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        ...additionalHeaders,
    };

    try {
        const response = await fetch(url, {
            method,
            body,
            headers,
        });

        if (!response.ok) {
            const errorData: ErrorResponse = await response.json();
            console.error('Erro na resposta do servidor:', errorData);
            throw new Error(errorData.message || 'Erro desconhecido');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
}
  