import { reducer as tripRoutes } from './tripRoutes';
import { reducer as tripDirections } from './tripDirection';
import { reducer as tripStops } from './tripStops';
import { reducer as tripDetails } from './tripDetails';

const rootReducer = {
  tripRoutes,
  tripDirections,
  tripStops,
  tripDetails
};

export default rootReducer;