
import {DETAILS,CITIZES} from '../../context/types/DetailsTypes';


const DestinationReducer = (state,action) => {

    if(action.type ===  DETAILS)
    {
      const destinationDetails = state.destinations.find((des) => 
            des.id === parseInt(action.payload) 
        );

        return {
            ...state,details:destinationDetails
        }
    }

    else if(action.type === CITIZES) {

      const filtered = state.cities.filter((city) => parseInt(city.destinationId) === parseInt(action.payload));

      
      return {
          ...state,filterdCitizes:filtered
      }
    }

    else {
        return state;
    }

} 

export default DestinationReducer

