import { Navigate, Outlet } from "react-router";
import { tokenStorage } from "../../utils/token";

export function ProtectedRoute() {
  const isAuthenticated = tokenStorage.exists();

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }

  return <Outlet />;
}
