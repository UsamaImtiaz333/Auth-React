import { create } from "zustand";

type User = {
  name: string;
  email: string;
  avatar?: string;
};

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
};

export const AuthStore = create<AuthState>((set) => ({
  token: sessionStorage.getItem("token"),
  isAuthenticated: !!sessionStorage.getItem("token"),
  user: JSON.parse(sessionStorage.getItem("user") || "null"), 
  login: (token: string, user: User) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
    set({ token, isAuthenticated: true, user });
  },
  logout: () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user"); // ✅ user remove
    set({ token: null, isAuthenticated: false, user: null });
  },
}));
