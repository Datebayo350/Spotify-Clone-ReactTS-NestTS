import { useState } from 'react';
import { Button } from 'primereact';
import { InputText } from 'primereact';
import { useDispatch, useSelector } from 'react-redux';
import axios, {AxiosResponse} from 'axios';
import { NavLink, Outlet } from 'react-router-dom';

import useAuth from '../hooks/useAuth';
import { spotifyAccessTokenUpdate } from '../__slices/user';
import { getAlbums } from '../__slices/artist';
import { selectUserState } from '../__store/store';
const Header = () => { 
    const dispatch = useDispatch();
    const userState= useSelector(selectUserState);
    const isAuthtenticated = useAuth();
    const [searchTerm, setSearchTerm] = useState("");
 

    const disconnect = () => {
        dispatch(spotifyAccessTokenUpdate(''));
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
            Authorization: `Bearer ${userState.spotifyAccessToken}`,
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
                    <NavLink to='/' className='pi pi-home text-2xl'> Accueil </NavLink>
                </li>
                <li>

                    <NavLink to='/recherche-albums' className='pi pi-search text-2xl'> Recherche</NavLink>
                </li>
                <li>

                    <NavLink to='/titres-aimes' className='pi pi-heart text-2xl'> Titres Likés</NavLink>
                </li>
                <li>

                    <NavLink to='/bibliotheque' className='pi pi-align-justify text-2xl'> Bibliothèque </NavLink>
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

export default Header;