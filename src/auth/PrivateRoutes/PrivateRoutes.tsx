import { Navigate, Outlet } from "react-router-dom";
import useAuthentication from "../../hooks/useAuthentication/useAuthentication";


const PrivateRoutes = () => {
    const {isAuthenticated} = useAuthentication();
    return isAuthenticated ? <Outlet/> : <Navigate to="/login" />
}

export default PrivateRoutes;