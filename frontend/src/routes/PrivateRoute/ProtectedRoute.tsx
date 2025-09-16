import { Navigate } from "react-router-dom";
import { AuthStore } from "@/store/Auth/AuthStore";
import type { ReactNode } from "react"; 

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = AuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
