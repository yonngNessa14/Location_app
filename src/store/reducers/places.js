import PlaceImage from '../../assets/images/james.jpg';
import * as actionType from '../actions/actionTypes';

const initialState = {
    places: [],
    selectedPlace: null
};

const reducer =  (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: PlaceImage
                  })
            };

        case actionType.DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter( place => {
                    return place.key !== state.selectedPlace.key;
                  }),
                  selectedPlace: null
            };
        
        case actionType.SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                    })
            };
        
        case actionType.DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };
        default:
            return state;
    }
};

export default reducer;