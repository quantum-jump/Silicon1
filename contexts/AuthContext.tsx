import React, { createContext, useContext, useState } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (onSuccess?: (user: User) => void) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (onSuccess?: (user: User) => void) => {
    // SIMULATION: In a real app, this would redirect to GitHub OAuth.
    // Here we simulate the callback by asking for the username.
    try {
      const username = window.prompt("Simulating GitHub OAuth\n\nPlease enter your GitHub username:", "anirudhr01");
      
      if (username && username.trim()) {
        const cleanUsername = username.trim();
        const isAdmin = cleanUsername.toLowerCase() === 'anirudhr01';
        
        const newUser: User = {
          username: cleanUsername,
          avatarUrl: `https://github.com/${cleanUsername}.png`,
          isAdmin
        };
        
        setUser(newUser);
        
        if (onSuccess) {
          onSuccess(newUser);
        }
      }
    } catch (e) {
      console.error("Login failed", e);
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
