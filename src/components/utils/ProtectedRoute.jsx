import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAuthorized, redirectToPath = "/" }) => {
  if (!isAuthorized) {
    return <Navigate to={redirectToPath} replace />;
  }
  return <Outlet />;
};
