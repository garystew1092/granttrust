import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../Context/userContext";
import { useEffect, useState } from "react";

export default function PrivateRoute({ allowedRoles }) {
  const { user, loading, error } = useUser();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!loading) {
      setInitialized(true);
    }
  }, [loading]);

  if (!initialized) {
    return <div className="full-page-loader">Loading authentication...</div>;
  }

  if (error) {
    return <div className="error-page">Authentication error: {error}</div>;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={user.role === "admin" ? "/admin/dashboard" : "/user/dashboard"} replace />;
  }

  return <Outlet />;
}