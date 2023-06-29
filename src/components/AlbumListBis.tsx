import { useEffect, useState } from "react";
import Album from "./Album";
import AlbumBis from "./AlbumBis";
import { DataView,   } from 'primereact/dataview';
import './AlbumList.css';
   
    function AlbumListBis({ albums }: any) {
        
        return (

            <div className="albumsBis" style={{ display: "flex", justifyContent: "center" }}>
                <DataView value={albums} itemTemplate={AlbumBis} layout="grid" paginator rows={12} />
            </div>
        )
}

export default AlbumListBis