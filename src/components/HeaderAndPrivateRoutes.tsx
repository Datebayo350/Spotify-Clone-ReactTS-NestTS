import { Link, Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { InputText } from 'primereact';
import { Button } from 'primereact';
import useAuth from '../hooks/useAuth';
import axios, {AxiosResponse} from 'axios';
import { updateSpotifyToken } from '../__store/store';
import { getAlbums } from '../__store/store';

const HeaderAndPrivateRoutes = () => { 

const dispatch = useDispatch();
  const [albumsList, setAlbumsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const userIsAuthenticated = useAuth();
 

    const disconnect = () => {
        dispatch(updateSpotifyToken(''));
        localStorage.removeItem('userSpotifyToken');
    };

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
            Authorization: `Bearer ${userIsAuthenticated.userSpotifyToken}`,
            "Content-Type": "application/json",
        },
        });
        dispatch(getAlbums(result.data.albums.items));
    };

    
    return (
        <div className='subRoot bg-green-300 w-full h-screen '>
            <header className='flex bg-red-500 flex align-items-center justify-content-evenly'>
               
               <nav className='bg-blue-300 w-4 h-4rem flex justify-content-evenly align-items-center'>
                <li className='text-6xl bg-yellow-500'>
                    <Link to='/' className='pi pi-home text-2xl'> Accueil </Link>
                </li>
                <li>

                    <Link to='/search' className='pi pi-search text-2xl'> Recherche</Link>
                </li>
                <li>

                    <Link to='/liked-tracks' className='pi pi-heart text-2xl'> Titres Likés</Link>
                </li>
                <li>

                    <Link to='/collections' className='pi pi-align-justify text-2xl'> Bibliothèque </Link>
                </li>
               </nav>

               <div className='searchContainer bg-pink-600'>
                    <Button style={{margin: '5px'}} label="Go !" className="p-button-success" aria-label="Search" onClick={searchAlbum}/>
                    <InputText placeholder="Rechercher" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
               </div>

                <button className='pi pi-chevron-circle-down text-2xl p-0' onClick={disconnect}></button>

            </header>
            
            <main>
                <Outlet/>
            </main>
            
        </div>
    ) 
}; 

export default HeaderAndPrivateRoutes;