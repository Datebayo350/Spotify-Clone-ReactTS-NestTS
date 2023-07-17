import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../custom-components/Header/Header';
import { useEffect } from 'react';
import { AuthenticationProps } from '../main';
import './components.css'

const AuthenticatedRoutes = ( {userIsLoggedIn}:AuthenticationProps ) : JSX.Element => {
    
    const authenticated = userIsLoggedIn();
    const navigate = useNavigate();

    useEffect( () => {
        !authenticated && navigate('/connexion')

    },[authenticated])

    return (   
        <div className="h-screen w-full bg-black-alpha-90
        flex flex-column-reverse justify-content-between
        bg-diff
        "> 
            <Header/>
            <main className="bg-orange-500 h-full w-11 m-auto
            flex">
                <Outlet/>
            </main>

        </div>
    );

    
}; 

export default AuthenticatedRoutes;