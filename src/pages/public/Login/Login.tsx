import { redirect, useFetcher, useNavigate } from 'react-router-dom';
import { spotifyLoginAndAuthorization } from '../../../__slices/user';
import { Button } from 'primereact/button';
import { useDispatch} from 'react-redux';
import SpotifyLogo from '../../../assets/SpotifyLogo.svg';
import axios, { AxiosError } from 'axios';
import { useEffect } from 'react';
import './Login.css';

const Login = () => {

  const fetcher = useFetcher();
  const dispatch = useDispatch();
  
  const spotifyIcon = () => {
    return (
      <img className="max-h-2rem
      md:max-h-4rem md:max-w-full" src={SpotifyLogo} alt="icôn spotify" />
    )
  };
  
  /**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
  const generateRandomString = function (length:number) {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID; 
  const redirect_uri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI; 
  const response_type = 'code';
  const spotify_state = generateRandomString(30);
  const show_dialog = true;
  const scope = 'user-read-private user-read-email';


  const  spotifyLogin = async () => {

    location.href=`https://accounts.spotify.com/fr/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}&state=${spotify_state}&show_dialog=${show_dialog}`;
    
    // navigate(`https://accounts.spotify.com/fr/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&scope=${scope}&state=${spotify_state}&show_dialog=${show_dialog}`);
  };


  return (
    <main className="login-page w-full h-screen flex flex-column align-items-center justify-content-center">
      <div className="title-container flex align-items-center">
        <span className="m-2 max-h-4rem">
          {spotifyIcon()}
        </span>
        <h1 className="text-base
        md:text-4xl
        lg:text-5xl"> Connexion avec Spotify </h1>
      </div>
        <Button className='spotify-button text-base border-transparent 
        md:text-2xl md:w-3 md:p-3' label="Se connecter" onClick={spotifyLogin}/>
    </main>
  );

};
            

export default Login;