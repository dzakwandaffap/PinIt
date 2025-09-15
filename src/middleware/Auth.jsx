import { Navigate } from "react-router-dom";

const Auth = ({ children, protectedRoute }) => {
    const token = localStorage.getItem("token");

    // If it's a protected route and there's no token, redirect to login
    if (protectedRoute && !token) {
        return <Navigate to="/login" replace />;
    }

    // If it's a guest route and there is a token, redirect to home
    if (!protectedRoute && token) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default Auth;