import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

interface ProtectedRouteProps {
    children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = useSelector((state: RootState) => state.auth.token);

    if (!token) {
            return <Navigate to="/login" />;
    }
  
    return children;
  };
  
  export default ProtectedRoute;