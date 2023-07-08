import './index.css'
import './App.css'

import 'primeicons/primeicons.css';
import '../..//front/node_modules/primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import { store } from './__store/store'
import { Provider } from 'react-redux'

import Callback from './Callback'
import Home from './pages/private/Home/Home';
import Login from './pages/public/Login/Login'
import Authentication from './components/Authentication'
import LikedTracks from './pages/private/LikedTracks/LikedTracks';
import CollectionsTracks from './pages/private/CollectionTracks/CollectionsTracks';
import AlbumListBis from './pages/private/AlbumsList/AlbumListBis';
import AlbumDetails from './custom-components/AlbumDetails';
//TODO: Once the user connection will be functional, have to dynamise tha AlbumDetails data props hydratation ans the component accessibility 
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Authentication/>}>
        <Route path="/*" element={<Home/>}/>
        <Route path="/recherche-albums" element={<AlbumListBis/>}/>
          <Route path="/recherche-albums/:idAlbum" element={<AlbumDetails artist="Tokenado" albumData={{test:"ok"}} releaseDate='2012'/>} />
        <Route path="/titres-aimes" element={<LikedTracks/>}/>
        <Route path="/bibliotheque" element={<CollectionsTracks/>}/>
      </Route>

      <Route path="/login" element={<Login/>}/>
      <Route path="/callback" element={<Callback/>}/>
    </>
  )
 );

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
)
