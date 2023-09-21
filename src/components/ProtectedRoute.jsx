import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/auth";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/login" replace="true" />;
  }
  return children;
};

export default ProtectedRoute;
