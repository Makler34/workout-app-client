import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cookies from 'js-cookie';
import { useAuth } from "./useAuth";
import { TOKEN } from "../app.constants";


const useCheckToken = () => {
    const { isAuth, logoff } = useAuth();
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        const token = cookies.get(TOKEN);

        if (!token) {
            logoff();
            navigate('/auth');
        }
    }, [pathname, isAuth]);

}

export default useCheckToken