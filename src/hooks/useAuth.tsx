import { useSelector } from 'react-redux'

export type isAtuhType = {
    loggedIn: boolean,
    userSportifyToken?: string
}

const useAuth = (): any => {
    const userState = useSelector( (state: any) => state.user.value);
    console.log('userState :>> ', userState);
    return userState.spotifyToken !== undefined ?  {loggedIn:true, userState} : {loggedIn:false};
}

export default useAuth;