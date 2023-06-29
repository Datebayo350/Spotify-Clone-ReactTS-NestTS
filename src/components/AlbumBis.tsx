import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { DataViewLayoutType } from 'primereact/dataview';
import './Album.css';

function AlbumBis(item: any, layout: DataViewLayoutType) {
    
    console.log('item :>> ', item);
    // const liked = item.liked;
    const releaseDateYear = item.release_date.split('-')[0];
    const artist = item.artists[0].name;
    

    function getImage(item: any) {
        const image = item.images.filter( (i: { height: number; }) => i.height === 64)[0];
        return image.url;
    }

    const header = (
        <Image src={getImage(item)} alt={`Image ${item.name}`} width='100%'></Image>
    )
    
    //TODO: Get user albums liked, then find if the title of the album is present in the user's liked albums list
    // const footer =( 
    //     <span className={`pi ${liked}`}></span> 
    // )

    // Display the date followed by a bullet hen the name of the artist 
    const date = (
        <span className="date">{item.date}</span>
    )

    const subTitle = (
        <div className='flex align-items-center'>
            <span className=''> 
                {releaseDateYear}
            </span>
            <i className='pi pi-circle-fill custom-icon m-1'></i>
            <span className=''> 
                {artist}
            </span>

        </div>
    )

    return (
        <Card title={item.name} header={header} subTitle={subTitle} className='text-sm' >
        </Card>
    )
}
export default AlbumBis
//? à Afinir 
/**
 *  - CREER LE SOUS TITRES
 */