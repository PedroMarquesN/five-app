import { useAuth } from '../composables/useAuth.ts';

export async function authFetch<T = any>(url: string, options: RequestInit = {}): Promise<T> {
  const { token, logout } = useAuth();


  const headers: HeadersInit = {
    ...(options.headers ?? {}),
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token.value}`,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok && response.status === 401) {
    logout();
    throw new Error(response.statusText);
  }

  
  return response.json() as Promise<T>;
}