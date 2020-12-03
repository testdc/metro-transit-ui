import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MainTrip from '../../components/mainTrip/MainTrip';
import { fetchRoutesStart } from '../../store/reducers/tripRoutes';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  card: {
    height: '100vh'
  },
  title: {
    fontSize: '1.4375rem',
    fontWeight: 700,
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },
});

export default function RealTimeDepartures() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRoutesStart());
  });

  return (
    <>
      <div className={classes.root}>
        <div className={classes.card}>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
              Real-time Departures
          </Typography>
          <MainTrip />
        </div>
      </div>
    </>
  );
}