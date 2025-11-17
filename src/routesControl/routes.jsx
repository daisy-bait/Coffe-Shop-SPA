import { Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import Unauthorized from "../pages/Errors/Unauthorized/Unauthorized";
import Forbidden from "../pages/Errors/Forbidden/Forbidden";

export const ProtectedRoute = ({ requiredRoles = [] }) => {
  const { isAuth, loading, roles } = useAuth();

  if (loading) {
    return null;
  }

  if (!isAuth) {
    return <Unauthorized />;
  }

  if (requiredRoles.length > 0) {
    const hasRoles = requiredRoles.some((r) => roles.includes(r));
    if (!hasRoles) {
      return <Forbidden />;
    }
  }

  return <Outlet />;
};
