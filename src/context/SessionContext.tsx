import React, { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../models/User";

type SessionContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

// Global session context for storing authenticated user and auth state
const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Provides session data to the entire application
export function SessionProvider({ children }: { children: ReactNode }) {
  // Stores the authenticated user returned from the backend
  const [user, setUser] = useState<User | null>(null);
  // Indicates whether the user successfully authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <SessionContext.Provider
      value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
    >
      {children}
    </SessionContext.Provider>
  );
}

// Custom hook to access the session context
export function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error("useSession must be used within a SessionProvider");
  }

  return context;
}