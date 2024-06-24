import { Navigate } from "react-router-dom";
import { selectCurrentToken } from "./auth";

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = selectCurrentToken;
    console.log('ProtectedRoute token:', token);

    if (!token) {
            return <Navigate to="/login" />;
    }
  
    return children;
  };
  
  export default ProtectedRoute;