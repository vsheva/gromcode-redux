export const WEATHER = 'WEATHER';
import { getUserData } from './weather.gateway';

export const weatherDataRecieved = cities => {
  return {
    type: WEATHER,
    payload: { cities },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    getUserData().then(cities => {
      dispatch(weatherDataRecieved(cities));
    });
  };
};
