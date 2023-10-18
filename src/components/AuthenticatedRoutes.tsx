import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector} from 'react-redux';

import Header from '../custom-components/Header/Header';
import { AuthenticationProps } from '../main';
import './components.css';
import useWindowSizes from '../hooks/useWindowSize';

import { selectNavbarExpended } from '../__slices/ui';
import TrackPlayer from '../custom-components/TrackPlayer/TrackPlayer';

const AuthenticatedRoutes = ({ userIsAuthenticated }: AuthenticationProps): JSX.Element => {
  const location = useLocation();
  const authenticated = userIsAuthenticated();
  const { windowWidth } = useWindowSizes();

  const navBarExpended = useSelector(selectNavbarExpended);
  return authenticated ? (
    <div className="relative content-layout bg-green-500">
      <Header />
      <main
        className={`bg-red-500 p-1 
        lg:w-11
        ${windowWidth >= 992 && navBarExpended ? 'main-layout-navExpended' : ''} 
        h-full overflow-auto  border-round-bottom-lg`}>
        <Outlet />
      </main>
      <footer
        className="w-full m-auto footer-layout absolute
      ">
        <TrackPlayer />
      </footer>
    </div>
  ) : (
    <Navigate to="/connexion" state={{ from: location }} replace />
  );
};

export default AuthenticatedRoutes;
