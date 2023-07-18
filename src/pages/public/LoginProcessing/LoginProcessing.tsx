import { useAppDispatch, useAppSelector } from '../../../hooks/useStoreHooks';
import { selectUserState } from '../../../__store/store';
import { useEffect } from 'react';
function LoginProcessing() {
    
    const dispatch = useAppDispatch();
    const userState = useAppSelector(selectUserState);


 


    useEffect( () => {
        const logCookie = document.cookie.split('=');

        if(logCookie[0] === 'loggedIn' && logCookie[1]){
            console.log('Condition de refresh remplie');

        };
    },[document.cookie])

    return <h1> En cours de connexion </h1>
}

export default LoginProcessing