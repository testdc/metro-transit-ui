import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '10%'
  },
  stopDescription: {
    display: 'flex',
    color: '#626462',
    textAlign: 'left',
    backgroundColor: '#8a8b8a4f'
  },
  stopName: {
    paddingRight: '1rem !important',
    paddingLeft: '1rem !important',
    fontSize: '1.4375rem !important',
    fontWeigth: 700,
    marginBottom: 0,
    lineHeight: 1.2,
    marginTop: 0
  },
  stopNumber: {
    marginLeft: 'auto',
    textAlign: 'right'
  },
  route: {
    backgroundColor: '#ffd200',
    paddingLeft: '1rem !important',
    textTransform: 'uppercase',
    letterSpacing: '1.28px',
    padding: '0.75rem'
  },
  details: {
    padding: '0 !important',
    letterSpacing: '1.28px',
    textAlign: 'left'
  },
  detailsRight: {
    padding: '0 !important',
    textAlign: 'right'
  },
  detailItem: {
    paddingLeft: '1rem !important',
    letterSpacing: '1.28px',
    padding: '0.75rem',
    borderBottom: 'black',
    borderBottomStyle: 'solid',
    borderBottomWidth: 'thin'
  }
}));

const TripDetails = () => {
  const classes = useStyles();
  const { data } = useSelector(state => state && state.tripDetails);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.stopDescription}>
          <div className={classes.stopName}>{data && data.stops && data.stops[0].description}</div>
          <div className={classes.stopNumber}>Stop#: {data && data.stops && data.stops[0].stop_id}</div>
        </Grid>
        <Grid item xs={4} className={classes.details}>
          <div className={classes.route}>ROUTE</div>
        </Grid>
        <Grid item xs={4} className={classes.details}>
          <div className={classes.route}>DESTINATION</div>
        </Grid>
        <Grid item xs={4} className={classes.detailsRight}>
          <div className={classes.route}>DEPARTS</div>
        </Grid>
        {data && data.departures && data.departures.map(item => {
          let time = item.departure_time;
          return (
            <>
              <Grid item xs={4} className={classes.details}>
                <div className={classes.detailItem}>{item.route_short_name}</div>
              </Grid>
              <Grid item xs={4} className={classes.details}>
                <div className={classes.detailItem}>{item.description}</div>
              </Grid>
              <Grid item xs={4} className={classes.detailsRight}>
                <div className={classes.detailItem}>{new Date(time).toLocaleTimeString()}</div>
              </Grid>
            </>
          )
        })}
      </Grid>
    </div>
  )
};

export default TripDetails;