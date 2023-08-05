import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Header from '../custom-components/Header/Header';
import { AuthenticationProps } from '../main';
import './components.css';

const AuthenticatedRoutes = ({ userIsAuthenticated }: AuthenticationProps): JSX.Element => {
  const location = useLocation();
  const authenticated = userIsAuthenticated();

  return authenticated ? (
    <div
      className="h-screen w-full bg-black-alpha-90
        flex flex-column-reverse justify-content-between
        bg-diff
        ">
      <Header />
      <main
        className="bg-orange-500 h-full w-11 m-auto
            flex">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/connexion" state={{ from: location }} replace />
  );
};

export default AuthenticatedRoutes;
