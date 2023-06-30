import { useState } from 'react'
import { Button } from 'primereact/button'
import axios, { AxiosResponse } from 'axios';
import { InputText } from 'primereact/inputtext';
import { useDispatch, useSelector } from 'react-redux';
import AlbumListBis from './AlbumListBis';

const AlbumsSearchForm = () => {
  
  const userSpotifyToken = useSelector(selectuserSpotifyToken);


    return (
      <>
          <AlbumListBis albums={albumsList}></AlbumListBis>
      </>
    ) 
}; 

export default AlbumsSearchForm;