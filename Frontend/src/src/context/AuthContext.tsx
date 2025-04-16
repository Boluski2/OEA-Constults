
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const authStatus = localStorage.getItem('authStatus');
    if (authStatus) {
      const parsed = JSON.parse(authStatus);
      setIsAuthenticated(parsed.isAuthenticated);
      setIsAdmin(parsed.isAdmin);
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // In a real app, this would validate against a backend API
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      setIsAdmin(true);
      
      // Store the auth status in localStorage
      localStorage.setItem('authStatus', JSON.stringify({
        isAuthenticated: true,
        isAdmin: true
      }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem('authStatus');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
