import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { DataView, DataViewLayoutOptions, DataViewLayoutType  } from 'primereact/dataview';
import { Paginator  } from 'primereact/paginator';
import './Album.css';
function AlbumBis(item: any, layout: DataViewLayoutType) {
    
    function getImage(item: any) {
        const image = item.images.filter( (i: { height: number; }) => i.height === 64)[0];
        return image.url;
    }

    // return (
    //     <div className='cardsContainer'>
    //         <Card title={item.name} subTitle={item.release_date} style={{width:'33.33%'}}>
    //             <Image src={getImage(item)} alt={item.name}></Image>
    //         </Card>
    //     </div>
    // )
    return (
        <div className='cardsContainer'>
            <p className='card'>Hello</p>
        </div>
    )

}


export default AlbumBis