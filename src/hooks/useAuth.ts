import { useAppSelector } from './useStoreHooks'
import { selectUserState } from '../__store/store';

// export type UseAuthType = Omit<RootState['user']['value'], 'value'>;

const useAuth = () => {
    
    const userState = useAppSelector(selectUserState);
    
    // return userState.spotifyAccessToken.length > 0 && userState.userLoggedIn ? true : false ;
    return false

}

export default useAuth;