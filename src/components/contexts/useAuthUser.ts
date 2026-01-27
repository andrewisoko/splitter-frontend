import { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  sub: string;       
  name: string;
  username: string;
  email: string;
  role: string;
}

export const useAuthUser = () => {
  const [user, setUser] = useState<JwtPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      try {
        const decoded: JwtPayload = jwtDecode(token);
        setUser(decoded);  
      } catch (error) {
        console.error('Invalid token');
        localStorage.removeItem('accessToken');
      }
    }
    setLoading(false);
  }, []);

  return { 
    userId: user?.sub || null, 
    user,
    loading 
  };
};
