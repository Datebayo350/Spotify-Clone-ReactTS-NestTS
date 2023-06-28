import { useEffect, useState } from "react";
import Album from "./Album";
import AlbumBis from "./AlbumBis";
import { DataView,   } from 'primereact/dataview';
import { Paginator  } from 'primereact/paginator';
import './AlbumList.css';

    const dataviewStyle = {
        width: '100%',
        height: '100vh',
        // backgroundColor: 'green',
       
        //? display flex concern unchangeable div above this container and the yellowContainer
    };
    
    function AlbumListBis({ albums }: any) {
        
        return (

            <div className="albumsBis" style={{ display: "flex", justifyContent: "center" }}>
                <DataView value={albums} itemTemplate={AlbumBis} style={dataviewStyle} layout="list" paginator rows={5} />
            </div>
        )
}

export default AlbumListBis