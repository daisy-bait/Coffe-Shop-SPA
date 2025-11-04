import { Outlet } from "react-router";
import { useAuth } from "../context/AuthContext";
import { useLogin } from "../context/LoginContext";

export const ProtectedRoute = ({ requiredRoles }) => {
  const { isAuth, loading, roles } = useAuth();
  const { openLogin } = useLogin();

  if (loading) {
    return <h1>Cargando...</h1>
  }

  if (!loading) {
    if (!isAuth)
      return (
        <h1>
          No has iniciado sesión{" "}
          <button onClick={openLogin}>Iniciar Sesión</button>
        </h1>
      );

    if (requiredRoles.length > 0) {
      const hasRoles = roles.some((role) => requiredRoles.includes(role));

      if (!hasRoles && roles.length > 0) {
        return <h1>No tienes Permisos</h1>;
      }
    }

    return <Outlet />;
  }
};
