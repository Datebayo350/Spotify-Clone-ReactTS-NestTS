import { Navigate, Outlet, useLocation,  } from 'react-router-dom';
import { AuthenticationProps } from '../main';

const AuthenticationRoutes= ({userIsAuthenticated}:AuthenticationProps ) : JSX.Element => {
    const location = useLocation();
    const authenticated = userIsAuthenticated();

    return ( authenticated ?
        <Navigate to='/' state={{from: location}} replace/>
        :
        <Outlet/> 
    )

}; 

export default AuthenticationRoutes;