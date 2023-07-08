import { useSelector } from 'react-redux'
import { selectUserState } from '../__store/store';

// export type UseAuthType = Omit<RootState['user']['value'], 'value'>;

const useAuth = () => {
    
    const userState = useSelector(selectUserState );
    
    return userState.spotifyAccessToken.length > 0 && userState.userLoggedIn ? true : false ;

}

export default useAuth;