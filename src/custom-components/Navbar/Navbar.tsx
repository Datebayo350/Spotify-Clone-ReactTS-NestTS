import useWindowSizes from '../../hooks/useWindowSize';
import { resizeNavbar, selectNavbarExpended } from '../../__slices/ui';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import axios, { AxiosResponse } from 'axios';

import { Image } from 'primereact/image';

import './navbar.css';
import SpotifyHomeIcon from '../../assets/spotify-home-icon.png';
import SpotifyHomeIconActive from '../../assets/spotify-home-icon_active.png';
import SpotifySearchIcon from '../../assets/spotify-search-icon.png';
import SpotifySearchIconActive from '../../assets/spotify-search-icon_active.png';
import SpotifyLibraryIcon from '../../assets/spotify-library-icon.png';
import SpotifyLibraryIconActive from '../../assets/spotify-library-icon_active.png';
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
      icon: SpotifyHomeIcon,
      activeIcon: SpotifyHomeIconActive,
    },
    {
      path: '/recherche-albums',
      iconClass: 'pi pi-search',
      label: 'Recherche',
      icon: SpotifySearchIcon,
      activeIcon: SpotifySearchIconActive,
    },
    {
      path: '/bibliotheque',
      iconClass: 'pi pi-th-large',
      label: 'Bibliothèque',
      icon: SpotifyLibraryIcon,
      activeIcon: SpotifyLibraryIconActive,
    },
    {
      path: '/favoris',
      iconClass: 'pi pi-heart',
      label: 'Favoris',
      activeIcon: 'pi pi-heart-fill',
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
            end
            className={`navlink text-400 flex align-items-center bg-blue-500
            ${
              windowWidth >= 992 && navBarExpended
                ? 'flex-row'
                : 'flex-column justify-content-between'
            } `}>
            {({ isActive }) => {
              return (
                <>
                  {navItem.label != 'Favoris' ? (
                    <Image
                      width="24px"
                      height="24px"
                      alt={`icone ${navItem.label}`}
                      src={`${isActive ? navItem.activeIcon : navItem.icon}`}
                    />
                  ) : (
                    <Image
                      width="24px"
                      height="24px"
                      className={`${
                        !isActive ? navItem.iconClass : navItem.activeIcon
                      } text-2xl flex`}
                    />
                  )}
                  {windowWidth >= 992 ? (
                    <span
                      hidden={!navBarExpended && windowWidth >= 992 ? true : false}
                      className={`text-sm ml-3 font-bold bg-red-300`}>
                      {navItem.label}
                    </span>
                  ) : (
                    <span className="text-sm bg-teal-900">{navItem.label}</span>
                  )}
                </>
              );
            }}
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
