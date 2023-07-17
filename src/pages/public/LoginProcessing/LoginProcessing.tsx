import { useAppDispatch, useAppSelector } from '../../../hooks/useStoreHooks';
import { spotifyAccessTokenUpdate } from '../../../__slices/user';
import { selectUserState } from '../../../__store/store';
import { redirect } from 'react-router-dom';
function LoginProcessing() {
    
    const dispatch = useAppDispatch();
    const userState = useAppSelector(selectUserState);

    const updateTokenSpotify  = () => {
        console.log('navigator.credentials :>> ', navigator.credentials);
        const credentialsContainer = navigator.credentials;
        console.log('credentialsContainer :>> ', credentialsContainer);
        // const userToken = location.hash.substring(1).split("&")[0].split("=")[1];
        const code = new URLSearchParams(location.search).get('code');
        const spotify_state = new URLSearchParams(location.href).get('state');

        //TODO: Need backend token storage and implement refresh token method
        // dispatch(spotifyAccessTokenUpdate(userToken));
        // redirect('/')
        // self.close();
        
        return 'update user token from callBack';
    };

    return (
        <div>
            {updateTokenSpotify()}
        </div>
    );
}

export default LoginProcessing