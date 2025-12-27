import { Navigate, Outlet } from "react-router";
import { tokenStorage } from "../../utils/token";

export function PublicRoute() {
  const isAuthenticated = tokenStorage.exists();

  if (isAuthenticated) {
    return <Navigate replace to="/" />;
  }

  return <Outlet />;
}
