import { Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import useAuthentication from "../../hooks/useAuthentication/useAuthentication";


const LoginPage = () => {
    const {isAuthenticated} = useAuthentication();


    if (isAuthenticated) {
        return <Navigate to="/home" />
    }
    return <Box> 
        Login Page
    </Box>
}

export default LoginPage;