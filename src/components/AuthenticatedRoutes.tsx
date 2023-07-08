import { Outlet } from 'react-router-dom';
import Header from './Header';
const AuthenticatedRoutes = () => {
    
    return (
        <> 
            <Header/>
       
            <div className='subRoot bg-green-300 w-full h-screen '>
                <main>
                    <Outlet/>
                </main>
         
            </div>
        </>

    ) 
}; 

export default AuthenticatedRoutes;