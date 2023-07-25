import { setCredentials } from '../../../__slices/user';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSpotifyRefreshAccessTokenQuery } from '../../../__slices/authApi';
import { useDispatch } from 'react-redux';

import { ProgressSpinner } from 'primereact/progressspinner';
        

function LoginProcessing() {
    
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {data, isLoading, isSuccess, error} = useSpotifyRefreshAccessTokenQuery('')
    
    let content= <></>;
    const logCookie = document.cookie.split('=');

    useEffect( () => {

        if(logCookie[0] === 'loggedIn' && logCookie[1]){
        }else{
            navigate('/login')
        };

    },[document.cookie])

    if(isLoading){

        content = (
            <div className="w-full h-screen
             flex flex-column justify-content-center align-items-center bg-green-300">
                <p className="text-green-800 font-bold">En cours de connexion ...</p>
                <ProgressSpinner strokeWidth="3" animationDuration="2s"  aria-label="Chargement" /> 
            </div>
        );
        
    }else if(isSuccess){
        
        localStorage.setItem('userIsLoggedIn','true')
     
        const {spotifyAccessToken, user} = data
        dispatch(setCredentials({user:user, spotifyAccessToken}));
        navigate('/')

    }else if (error){
        
        navigate('/connexion')
    }


    return content;
  
}

export default LoginProcessing