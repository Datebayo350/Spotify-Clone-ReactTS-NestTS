import useAuth from './hooks/useAuth';
import { Navigate } from 'react-router-dom';
import HeaderAndPrivateRoutes from './components/HeaderAndPrivateRoutes';
const Authentication = () => {
    const userAuthentication = useAuth();
    const localStorageToken = localStorage.userSpotifyToken;
    const userAuthenticated = true;
    console.log('userAuthentication.loggedIn :>> ', userAuthentication.loggedIn);

    // if (localStorageToken !== undefined && userAuthentication.loggedIn) {
    
    //     return(
    //       <h1>Utilisateur connecté = {localStorageToken} </h1>
    //       )
    //     }else{
    //       return(
    //       <h1> Uilisateur pas connecté</h1>
    //     )
    //   }

    // return(
    //     localStorageToken !== undefined && userAuthentication.loggedIn ?  <HeaderAndPrivateRoutes/> : <Navigate to='/login'/>
    // )
    return(
        userAuthenticated ?  <HeaderAndPrivateRoutes/> : <Navigate to='/login'/>
    )
   

}; 

export default Authentication;