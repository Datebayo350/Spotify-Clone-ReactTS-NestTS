import { Button } from 'primereact';
import { InputText } from 'primereact';

import axios, {AxiosResponse} from 'axios';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useAuth from '../../hooks/useAuth';
import { spotifyAccessTokenUpdate } from '../../__slices/user';
import { getAlbums } from '../../__slices/artist';
import { selectUserState } from '../../__store/store';
import useWindowSizes from '../../hooks/useWindowSize';

import './Header.css'

const Header = () => {

    const {windowWidth, windowHeight} = useWindowSizes(window.innerHeight, window.innerWidth)
    const dispatch = useDispatch();
    const userState= useSelector(selectUserState);
    const isAuthtenticated = useAuth();
    const [searchTerm, setSearchTerm] = useState("");
 
    const navLinks = [
        {
            path: '/',
            iconClass: 'pi pi-home',
            label: 'Accueil'
        },
        {
            path: '/recherche-albums',
            iconClass: 'pi pi-search',
            label: 'Recherche'
        },
        {
            path: '/favoris',
            iconClass: 'pi pi-heart',
            label: 'Favoris'
        },
        {
            path: '/bibliotheque',
            iconClass: 'pi pi-th-large',
            label: 'Bibliothèque'
        },
    ];

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

        <header className='  bg-red-500 h-5rem
         
            md:header-layout   '>
            
            <nav className='w-full h-full  bg-black-alpha-70
            flex justify-content-evenly align-items-center'>
                
                {navLinks.map( navItem => {
                  return(
                    <NavLink to={navItem.path} className='text-white flex flex-column align-items-center'> 
                        <i className={`${navItem.iconClass} text-3xl max-w-min inline`}></i>
                        <span className='mt-1'>{navItem.label}</span> 
                    </NavLink>
                  )}) 
                }
            
            </nav>

            { windowWidth > 768 &&
                <>
                    <div className='searchContainer bg-pink-600'>
                        <Button style={{margin: '5px'}} label="Go !" className="p-button-success" aria-label="Search" onClick={searchAlbum}/>
                        <InputText placeholder="Rechercher" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>

                    <button className='pi pi-chevron-circle-down text-2xl p-0' onClick={disconnect}></button>
                </>
            }

        </header>
        
    ) 
}; 

export default Header;