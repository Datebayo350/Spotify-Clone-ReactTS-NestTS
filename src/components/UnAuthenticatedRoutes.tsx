import { useEffect } from 'react';
import { Outlet, useNavigate,  } from 'react-router-dom';
import { AuthenticationProps } from '../main';

const UnAuthenticatedRoutes= ({userIsLoggedIn}:AuthenticationProps ) : JSX.Element => {

    const authenticated = userIsLoggedIn();
    const navigate = useNavigate(); 
    
    useEffect( () => {
        authenticated && navigate('/')
    },[authenticated])

    return <Outlet/> 
}; 

export default UnAuthenticatedRoutes;