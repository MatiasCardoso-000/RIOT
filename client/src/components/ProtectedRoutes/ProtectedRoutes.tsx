import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const ProtectedRoutes = ({
  children,
  redictTo,
}: {
  children: React.ReactNode;
  redictTo: string;
}) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading || !isAuthenticated) return <Navigate to={redictTo} replace />;

  return isAuthenticated ? children : <Outlet />;
};
