import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../custom-components/Header/Header';
import { useEffect } from 'react';
import { AuthenticationProps } from '../main';

const AuthenticatedRoutes = ( {userIsLoggedIn}:AuthenticationProps ) : JSX.Element => {
    
    const authenticated = userIsLoggedIn();
    const navigate = useNavigate();

    useEffect( () => {
        !authenticated && navigate('/connexion')

    },[authenticated])

    return (   
        <div className="h-screen w-full
        flex flex-column-reverse justify-content-between
        bg-diff
        "> 
            <Header/>
            <main className="bg-orange-500 
            flex">
                <Outlet/>
            </main>

        </div>
    );

    
}; 

export default AuthenticatedRoutes;