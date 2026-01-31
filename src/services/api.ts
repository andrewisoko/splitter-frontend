import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
  withCredentials: true,
});



api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


// Refresh state management
let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any, token: string | null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
      // console.log(`process queue rejection:${error.data}`)
    } else {
      prom.resolve(token);
    }
  });
  
  failedQueue = [];
};



// Response interceptor - AUTO REFRESH MAGIC
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    // Auto-refresh on 401 (expired token)
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // Queue request until refresh finishes
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;  
            return api(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Call your backend /auth/refresh
        const refreshToken = localStorage.getItem("refresh_token");
        const refreshResponse = await axios.post(
          "http://localhost:3001/auth/refresh",
          {refreshToken},
          { withCredentials: true }
        );
        
        const { access_token, refresh_token } = refreshResponse.data;
        
        // Update localStorage
        localStorage.setItem("access_token", access_token);
        if (refresh_token) {
          localStorage.setItem("refresh_token", refresh_token);
        }
        
        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        processQueue(null, access_token);
        
        return api(originalRequest);
      } catch (refreshError) {
        console.log(`refresh error ${refreshError}`)
        // Refresh failed → Logout
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        processQueue(refreshError, null);
        window.location.href = "/";
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

export default api;
