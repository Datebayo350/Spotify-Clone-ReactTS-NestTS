import './index.css';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { store } from './__store/store';
import { Provider } from 'react-redux';

import LoginProcessing from './pages/public/LoginProcessing/LoginProcessing';
import Home from './pages/private/Home/Home';
import Login from './pages/public/Login/Login';
import LikedTracks from './pages/private/LikedTracks/LikedTracks';
import CollectionsTracks from './pages/private/CollectionTracks/CollectionsTracks';
import AlbumListBis from './pages/private/AlbumsList/AlbumListBis';
import AlbumDetails from './custom-components/AlbumDetails';
import AuthenticatedRoutes from './components/AuthenticatedRoutes';
import AuthenticationRoutes from './components/AuthenticationRoutes';
import useAuth from './hooks/useAuth';
//TODO: Once the user connection will be functional, have to dynamise tha AlbumDetails data props hydratation and the component accessibility

export type AuthenticationProps = {
  userIsAuthenticated: () => boolean;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthenticatedRoutes userIsAuthenticated={useAuth} />}>
        <Route path="/*" element={<Home />} />
        <Route path="/recherche-albums" element={<AlbumListBis />} />
        <Route
          path="/recherche-albums/:idAlbum"
          element={<AlbumDetails artist="Tokenado" albumData={{ test: 'ok' }} releaseDate="2012" />}
        />
        <Route path="/favoris" element={<LikedTracks />} />
        <Route path="/bibliotheque" element={<CollectionsTracks />} />
      </Route>
      <Route element={<AuthenticationRoutes userIsAuthenticated={useAuth} />}>
        <Route path="/connexion" element={<Login />} />
        <Route path="/traitement-connexion" element={<LoginProcessing />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
