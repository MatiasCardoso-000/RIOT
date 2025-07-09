import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

interface ProtectedRoutesProps {
  children?: React.ReactNode;
  redirectTo: string;
  requiredRole?: number | null;
  isAuthenticated?: boolean;
}

export const ProtectedRoutes = ({
  children,
  redirectTo,
  requiredRole,
  isAuthenticated,
}: ProtectedRoutesProps) => {
  const { isLoading, user } = useAuth();

  if (isLoading) return <h1>Cargando...</h1>;

  if (requiredRole && user?.role_id !== requiredRole) {
    <Navigate to={redirectTo} replace />;
  }
  if (!isAuthenticated && !isLoading) return <Navigate to={redirectTo} replace />;

  return children ? <>{children}</> : <Outlet />;
};
