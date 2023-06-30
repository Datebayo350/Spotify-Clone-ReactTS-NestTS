import { useState } from 'react'
import './App.css'
import { Button } from 'primereact/button'
import { useDispatch, useSelector } from 'react-redux';
import { updateSpotifyToken } from './__store/store';
import { InputText } from 'primereact/inputtext';
import AlbumListBis from './components/AlbumListBis';
import axios, { AxiosResponse } from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function AppBis() {
  
  const dispatch = useDispatch();
  const [albumsList, setAlbumsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

//?==========================================================================
  const navigate = useNavigate();

//?==========================================================================
  
  /**
   * Login to spotify
   */
  const connect = () => {
    dispatch(updateSpotifyToken(""));
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    var width = 800;
    var height = 600;
    var left = screen.width / 2 - width / 2;
    var top = screen.height / 2 - height / 2;
    const popup = window.open(
      `https://accounts.spotify.com/fr/authorize?client_id=${clientId}&response_type=token&redirect_uri=${location.origin}/callback&scope=user-read-private user-read-email&show_dialog=true`,
      "Login with Spotify",
      `width=${width},height=${height},top=${top},left=${left}`
      );
    const callback = async (userSpotifyToken: string) => {
      //@ts-ignore 
      popup.close();
      // redirect('/');
      dispatch(updateSpotifyToken(userSpotifyToken));
    };
    // @ts-ignore
    window.spotifyCallback = callback;
  };

  /**
   * Recherche des albums
  */
  const searchAlbum = async () => {
      const result: AxiosResponse = await axios({
        method: "GET",
        responseType: "json",
        params: {
          q: searchTerm,
          type: "album",
        },
        url: "https://api.spotify.com/v1/search",
        headers: {
          Authorization: `Bearer ${userIsAuthenticated.userSportifyToken}`,
          "Content-Type": "application/json",
        },
      });
      setAlbumsList(result.data.albums.items);
  };
}

export default AppBis
