import axios from 'axios'

export const apiClient = axios.create({
  baseURL:
    typeof window !== 'undefined'
      ? '/'
      : process.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

// Optional: Add request interceptor for auth tokens
apiClient.interceptors.request.use(
  (config) => {
    // You can inject tokens here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Optional: Add response interceptor for global error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global auth errors (e.g., 401 Unauthorized)
    if (error.response && error.response.status === 401) {
      // Redirect to login or refresh token
    }
    return Promise.reject(error)
  },
)

// Keep an authClient alias if other parts of the app still expect it
export const authClient = apiClient
