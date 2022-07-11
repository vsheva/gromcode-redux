import { WEATHER } from './weather.actions';

const initialState = {
  cities: [],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER: {
      return {
        ...state,
        cities: action.payload.cities,
      };
    }

    default:
      return state;
  }
};

export default weatherReducer;
