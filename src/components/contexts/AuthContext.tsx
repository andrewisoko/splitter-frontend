// contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if token exists on app load
    const token = localStorage.getItem('accessToken');
    if (token) {
      // Optionally validate token with backend
      setUser({ token });
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem('accessToken', token);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
