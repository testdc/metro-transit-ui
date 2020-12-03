import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import styled from 'styled-components';
import { fetchDirectionsStart } from '../../store/reducers/tripDirection';
import { fetchStopsStart } from '../../store/reducers/tripStops';
import TripDetails from '../TripDetails';
import { fetchDetailsStart } from '../../store/reducers/tripDetails';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    textAlign: 'left'
  }
}));

const RoutesDiv = styled.div`
  position: relative;
  display: block;
  height: 50px;
  color: #8a8b8a;
  font-size: 18px !important;
  font-size: 1.125rem !important;
  padding: 0.75rem;
  text-align: center;
`;

export default function ByRoute() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [tripRoute, setTripRoute] = useState('');
  const [tripDirection, setTripDirection] = useState('');
  const [tripStop, setTripStop] = useState('');
  const { data: tripRoutes } = useSelector(state => state && state.tripRoutes);
  const { data: tripDirections } = useSelector(state => state && state.tripDirections);
  const { data: tripStops } = useSelector(state => state && state.tripStops);

  const handleRouteChange = (event) => {
    const id = event.target.value;
    setTripRoute(id);
    dispatch(fetchDirectionsStart(id));
  };

  const handleDirectionChange = (event) => {
    const directionId = event.target.value;
    setTripDirection(directionId);
    dispatch(fetchStopsStart(tripRoute, directionId));
  };

  const handleStopChange = (event) => {
    const stopId = event.target.value;
    setTripStop(stopId);
    dispatch(fetchDetailsStart(tripRoute, tripDirection, stopId));
  };

  return (
    <RoutesDiv>
      <FormControl className={classes.formControl}>
        <Select
          displayEmpty
          labelId="route-label"
          id="route-select"
          value={tripRoute}
          onChange={handleRouteChange}
          input={<Input />}
        >
          <MenuItem disabled value="">
            <em>Select route</em>
          </MenuItem>
          {
            tripRoutes && tripRoutes.map(item =>
              <MenuItem key={item.route_id} value={item.route_id}> {item.route_label} </MenuItem>
            )}
        </Select>
      </FormControl>
      {tripRoute !== "" &&
        <FormControl className={classes.formControl}>
          <Select
            displayEmpty
            labelId="direction-label"
            id="direction-select"
            value={tripDirection}
            onChange={handleDirectionChange}
            input={<Input />}
          >
            <MenuItem disabled value="">
              <em>Select direction</em>
            </MenuItem>
            {
              tripDirections && tripDirections.map(item =>
                <MenuItem key={item.direction_id} value={item.direction_id}> {item.direction_name} </MenuItem>
              )}
          </Select>
        </FormControl>
      }
      {tripDirection !== "" &&
        <FormControl className={classes.formControl}>
          <Select
            displayEmpty
            labelId="stops-label"
            id="stops-select"
            value={tripStop}
            onChange={handleStopChange}
            input={<Input />}
          >
            <MenuItem disabled value="">
              <em>Select stop</em>
            </MenuItem>
            {
              tripStops && tripStops.map(item =>
                <MenuItem key={item.place_code} value={item.place_code}> {item.description} </MenuItem>
              )}
          </Select>
        </FormControl>
      }
      {
        tripStop !== "" &&
        <TripDetails />
      }
    </RoutesDiv>
  );
}