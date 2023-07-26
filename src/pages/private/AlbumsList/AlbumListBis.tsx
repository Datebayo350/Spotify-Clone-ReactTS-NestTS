import { DataView } from 'primereact/dataview';
import AlbumCard from '../../../custom-components/AlbumCard';
import './AlbumList.css';

function AlbumListBis({ albums }: any) {
  return (
    <div className="albumsBis" style={{ display: 'flex', justifyContent: 'center' }}>
      <DataView value={albums} itemTemplate={AlbumCard} layout="grid" paginator rows={12} />
    </div>
  );
}

export default AlbumListBis;
