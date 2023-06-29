import { useState } from 'react'
import './App.css'
import { Button } from 'primereact/button'
import { useDispatch, useSelector } from 'react-redux';
import { RootState, selectuserSpotifyToken } from './__store/store';
import { uptadeUserToken } from "./__store/store";
import { InputText } from 'primereact/inputtext';
import AlbumList from './components/AlbumList';
import AlbumListBis from './components/AlbumListBis';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { redirect } from 'react-router-dom';
import { useEffect } from 'react';
function App() {
  const userSpotifyToken = useSelector(selectuserSpotifyToken);
  console.log('userSpotifyToken :>> ', userSpotifyToken);
  const dispatch = useDispatch();
  const [albumsList, setAlbumsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  /**
   * Login to spotify
   */
  const connect = () => {
    dispatch(uptadeUserToken(""));
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
      dispatch(uptadeUserToken(userSpotifyToken));
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
          Authorization: `Bearer ${userSpotifyToken}`,
          "Content-Type": "application/json",
        },
      });
      setAlbumsList(result.data.albums.items);
    }
    
    const disconnect = () => {
      dispatch(uptadeUserToken(''));
      localStorage.removeItem('userSpotifyToken');
      redirect('/');
    }
    
    useEffect(() =>{
      console.log('localStorage mis à jour :>> ', localStorage['userSpotifyToken'],userSpotifyToken);
      redirect('/');
    },userSpotifyToken)

  if (localStorage['userSpotifyToken'] === undefined || localStorage['userSpotifyToken'].length <= 0) {
    return (
      <div className="content">
      <Button label="Se connecter à spotify" onClick={connect}/>
    </div>
    )
  }
  else {
    return (    
      <div className="content">
        <Button label="Se déconnecter" className="p-button-danger" onClick={disconnect}/>
        <div className="recherche">
          <h2>Cherher un album</h2>
          <span className="p-input-icon-left">
            <InputText placeholder="Rechercher" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </span>
          <Button style={{margin: '5px'}} label="Go !" className="p-button-success" aria-label="Search" onClick={searchAlbum}/>
        </div>
        <AlbumListBis albums={albumsList}></AlbumListBis>
      </div>
    )
  }
}

export default App
