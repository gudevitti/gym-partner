import { AuthObject } from "../../auth/auth";

const AUTH_STORAGE_KEY = 'auth';

const useAuthentication = () =>{
    const authMock = {token: 'asdasd'};
    

    function setAuth(auth: AuthObject){
        window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth))
    }

    function getAuth():AuthObject{
        const auth = window.localStorage.getItem(AUTH_STORAGE_KEY);
        return auth ? JSON.parse(auth) : null;
    }
    
    setAuth(authMock);
    const isAuthenticated = !!getAuth().token;

    return {isAuthenticated: isAuthenticated, setAuth, getAuth};
}

export default useAuthentication;