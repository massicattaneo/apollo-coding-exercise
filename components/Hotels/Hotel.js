import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import Image from 'next/image';
import styles from './hotel.module.css';

export function Hotel(props) {
    return <Grid item xs={12} sm={6}>
        <Paper className={styles.container}>
            <Grid container spacing={1}>
                <Grid item xs>
                    <Image
                        className={styles.image}
                        width='240px'
                        height='180px'
                        src={props.hotel.image}
                        alt={props.hotel.name}  />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div className={styles.container}>
                        <Rating name="read-only" value={props.hotel.rate} precision={0.5} readOnly />
                        <Typography variant="h5">{props.hotel.name}</Typography>
                        {props.hotel.city} - {props.hotel.country}
                        <p>
                            {props.hotel.description}
                        </p>
                        <strong>{props.hotel.price} €</strong>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    </Grid>
}