import './index.css'
import 'primeicons/primeicons.css';
import '../..//front/node_modules/primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";

import { store } from './__store/store'
import { Provider } from 'react-redux'

import App from './App'
import AppBis from './AppBis'
import Callback from './Callback'
import Home from './components/Home';
import Login from './components/Login'
import HeaHeaderAndPrivateRoutesder from './components/HeaderAndPrivateRoutes';
import Authentication from './Authentication'
import LikedTracks from './components/LikedTracks';
import AlbumsSearchForm from './components/AlbumsSearchForm'
import CollectionsTracks from './components/CollectionsTracks';
import AlbumListBis from './components/AlbumListBis';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppBis/>,
  },
  {
    path: "/search-albums",
    element: <AlbumsSearchForm/>,
  },
  {
    path: "/login",
    element: <Authentication />,
  },
  {
    path: "/callback",
    element: <Callback/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider store={store}>
        <Router>

          <Routes>
            
            <Route  element={<Authentication/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/callback" element={<Callback/>}/>
              <Route path="/search" element={<AlbumListBis/>}/>
              <Route path="/liked-tracks" element={<LikedTracks/>}/>
              <Route path="/collections" element={<CollectionsTracks/>}/>
            </Route>

            <Route path="/login" element={<Login/>}/>

          </Routes>

        </Router>
        
        {/* <RouterProvider router={router} /> */}
      </Provider>
  </React.StrictMode>
)
