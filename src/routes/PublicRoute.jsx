import { Navigate } from "react-router-dom";
import { useUser } from "../Context/userContext";
import { useEffect } from "react";

const PublicRoute = ({ children }) => {
  const { user, loading, refreshUser } = useUser();

  useEffect(() => {
    if (user && !loading) {
      refreshUser(); // Refresh data on route change
    }
  }, [user, loading, refreshUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return <Navigate to={user.role === "admin" ? "/admin/dashboard" : "/user/dashboard"} replace />;
  }

  return children;
};

export default PublicRoute;