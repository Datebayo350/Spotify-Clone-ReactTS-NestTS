import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';
import HeaderAndPrivateRoutes from './Header';
const Authentication = () => {
    const userAuthenticated = true ;
    const userAuthentication = useAuth();

    return(
        userAuthenticated ?  <HeaderAndPrivateRoutes/> : <Navigate to='/login'/>
    )
   

}; 

export default Authentication;