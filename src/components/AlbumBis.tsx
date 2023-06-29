import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { DataViewLayoutType } from 'primereact/dataview';
import './Album.css';

function AlbumBis(item: any, layout: DataViewLayoutType) {
    
    function getImage(item: any) {
        const image = item.images.filter( (i: { height: number; }) => i.height === 64)[0];
        return image.url;
    }
    return (
        <Card title={item.name} subTitle={item.release_date} >
            <Image src={getImage(item)} alt={item.name}></Image>
        </Card>
    )
}
export default AlbumBis