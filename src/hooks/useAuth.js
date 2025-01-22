
import useStore from '../store/auth.store';


export const useAuth = () => {
    const isAuth = useStore((state) => state.isAuth);
    const user = useStore((state) => state.user);
    const login = useStore((state) => state.login);
    const logoff = useStore((state) => state.logoff
    );

    return { isAuth, user, login, logoff };
};