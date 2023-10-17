import { useDispatch, useSelector } from 'react-redux';

import { selectNavbarExpended } from '../../__slices/ui';
import useWindowSizes from '../../hooks/useWindowSize';

import './Header.css';
import { logOut } from '../../__slices/user';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  const dispatch = useDispatch();
  const navBarExpended = useSelector(selectNavbarExpended);
  const { windowWidth } = useWindowSizes();

  const titlesPages = [
    {
      path: '/',
      title: 'Bonjour',
    },
    {
      path: '/recherche-albums',
      title: 'Rechercher',
    },
    {
      path: '/favoris',
      title: 'Favoris',
    },
    {
      path: '/bibliotheque',
      title: 'Bibliothèque',
    },
  ];

  const currentTitleOfThePage = titlesPages.find((title) => title.path === location.pathname)
    ?.title;

  const disconnect = () => {
    dispatch(logOut());
  };

  return (
    <header
      className={`bg-yellow-300 w-11 m-auto border-round-top-lg
      ${windowWidth >= 992 && navBarExpended ? 'header-layout' : ''} `}>
      <h2>{currentTitleOfThePage}</h2>
      <Navbar />
    </header>
  );
};

export default Header;
