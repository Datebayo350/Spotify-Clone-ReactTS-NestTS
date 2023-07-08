import { useDispatch } from 'react-redux';
import { spotifyAccessTokenUpdate } from './__slices/user';
function Callback() {
    
    const dispatch = useDispatch();

    const updateTokenSpotify  = () => {
        const userToken = window.location.hash.substring(1).split("&")[0].split("=")[1];
        //TODO: Need backend token storage and implement refresh token method
        dispatch(spotifyAccessTokenUpdate(userToken));
        self.close();
        
        return 'update user token from callBack';
    };

    return (
        <div>
            {updateTokenSpotify()}
        </div>
    );
}

export default Callback