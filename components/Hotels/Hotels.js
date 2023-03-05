import { useQuery } from '@apollo/client';
import { GET_HOTELS } from '../../data/queries';
import Grid from '@material-ui/core/Grid';
import { Hotel } from './Hotel';
import EventEmitter from 'reactjs-eventemitter';
import { REFRESH_HOTELS } from '../../data/events';

export function Hotels() {
    const { data, loading, error, refetch } = useQuery(GET_HOTELS);

    EventEmitter.subscribe(REFRESH_HOTELS, () => refetch());

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2 style={{ textAlign: 'center' }}>
            ERROR LOADING HOTELS. 
            <br/>
            PLEASE REFRESH THE PAGE
        </h2>;
    }

    return (
        <div>
            <Grid container spacing={3}>
                {data.hotels.map(hotel => <Hotel key={hotel.id} hotel={hotel}></Hotel>)}
            </Grid>
        </div>
    );
}