import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ requiredRoles = [] }) => {
    const { isAuth, loading, roles } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (!isAuth) {
                navigate("/unauthorized", { replace: true });
            } else if (requiredRoles.length > 0) {
                const hasRequiredRole = requiredRoles.some(role => roles.includes(role));
                if (!hasRequiredRole) {
                    navigate("/forbidden", { replace: true });
                }
            }
        }
    }, [isAuth, loading, roles, requiredRoles, navigate]);

    if (loading) {
        return null;
    }

    if (!isAuth) {
        return null;
    }

    if (requiredRoles.length > 0) {
        const hasRequiredRole = requiredRoles.some(role => roles.includes(role));
        if (!hasRequiredRole) {
            return null;
        }
    }

    return <Outlet />;
}