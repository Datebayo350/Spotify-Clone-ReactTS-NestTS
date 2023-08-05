import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export type ComponentProps = {
  artist: string;
  albumData: any;
  releaseDate: string;
};

const AlbumDetails: React.FC<ComponentProps> = ({ artist, albumData, releaseDate }) => {
  // return (
  //     <DataTable value={albumData}>
  //         <Column field="name" header="Name"></Column>
  //         <Column header="Image" body={imageBodyTemplate}></Column>
  //         <Column field="price" header="Price" body={priceBodyTemplate}></Column>
  //         <Column field="category" header="Category"></Column>
  //         <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
  //         <Column header="Status" body={statusBodyTemplate}></Column>
  //     </DataTable>
  // )
  return <h1> Album Details </h1>;
};

export default AlbumDetails;
