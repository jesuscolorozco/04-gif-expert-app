import { useFetchGifs } from '../hooks/useFetchGifs';
import GiftGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{ category }</h3>
            { loading ? 'Cargando...' : 'Data cargada' }

            <div className='card-grid'>
                {
                    data.map( img =>  <GiftGridItem key={ img.id } { ...img } />)
                }
            </div>

        </>
    )
}

export default GifGrid
