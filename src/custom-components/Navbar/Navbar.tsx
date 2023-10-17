import useWindowSizes from '../../hooks/useWindowSize';
import { resizeNavbar, selectNavbarExpended } from '../../__slices/ui';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './navbar.css';
import axios, { AxiosResponse } from 'axios';

const Navbar = () => {
  // const { windowWidth } = useWindowSizes(window.innerHeight, window.innerWidth);
  const { windowWidth } = useWindowSizes();
  const navBarExpended = useSelector(selectNavbarExpended);
  const dispatch = useDispatch();
  const navLinks = [
    {
      path: '/',
      iconClass: 'pi pi-home',
      label: 'Accueil',
    },
    {
      path: '/recherche-albums',
      iconClass: 'pi pi-search',
      label: 'Recherche',
    },
    {
      path: '/bibliotheque',
      iconClass: 'pi pi-th-large',
      label: 'Bibliothèque',
    },
    {
      path: '/favoris',
      iconClass: 'pi pi-heart',
      label: 'Favoris',
    },
  ];

  const searchAlbum = async () => {
    const result: AxiosResponse = await axios({
      method: 'GET',
      responseType: 'json',
      params: {
        q: searchTerm,
        type: 'album',
      },
      url: 'https://api.spotify.com/v1/search',
      headers: {
          _Authorization: `Bearer ${userState.spotifyAccessToken}`,
          get Authorization() {
              return this._Authorization;
          },
          set Authorization(value) {
              this._Authorization = value;
          },
        'Content-Type': 'application/json',
      },
    });
    // dispatch(getAlbums(result.data.albums.items));
  };

  //? Albumsearch
  {
    /* { windowWidth > 768 &&
                <>
                    <div className='searchContainer bg-pink-600'>
                        <Button style={{margin: '5px'}} label="Go !" className="p-button-success" aria-label="Search" onClick={searchAlbum}/>
                        <InputText placeholder="Rechercher" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>

                    <button className='pi pi-chevron-circle-down text-2xl p-0' onClick={disconnect}></button>
                </>
            } */
  }

  return (
    <nav
      className={`navbar-layout
      lg:border-round-xl 
      ${windowWidth >= 992 && navBarExpended ? 'w-2' : ''}`}>
      {/* Generating navbar links */}
      {navLinks.map((navItem, index) => {
        return (
          <NavLink
            key={index}
            to={navItem.path}
            className={`navlink flex align-items-center text-400
            ${
              windowWidth >= 992 && navBarExpended
                ? 'flex-row justify-content-start'
                : 'flex-column'
            } `}>
            <i
              className={`${navItem.iconClass} ${
                navBarExpended ? 'w-1' : ''
              } text-2xl max-w-min  inline`}></i>

            {windowWidth >= 992 ? (
              <span
                hidden={!navBarExpended && windowWidth >= 992 ? true : false}
                className="text-sm  ml-3 font-bold">
                {navItem.label}
              </span>
            ) : (
              <span className="text-sm bg-yellow-800">{navItem.label}</span>
            )}
          </NavLink>
        );
      })}

      {/* Button for toggling navbar size for big screens */}
      {windowWidth >= 992 && (
        <div className="relative w-full">
          <button
            className={`${
              navBarExpended ? 'resize-navBar__button--open' : 'resize-navBar__button--close'
            }`}
            onClick={() => dispatch(resizeNavbar())}>
            <i
              className={`w-min text-lg pi ${
                navBarExpended ? 'pi-arrow-left' : 'pi-arrow-right'
              }`}></i>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
