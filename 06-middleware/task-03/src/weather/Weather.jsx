import React, { useEffect } from 'react';
import * as weatherActions from './weather.actions';
import { weatherSelector } from './weather.selectors';
import { connect } from 'react-redux';

const Weather = props => {
  useEffect(() => {
    return props.getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {props.cities.weather.cities.map(elem => (
          <li className="city" key={elem.id}>
            <span className="city__name">{elem.name}</span>npm
            <span className="city__temperature">{elem.temperature}F</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = state => {
  return {
    cities: weatherSelector(state),
  };
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
