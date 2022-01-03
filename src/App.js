import { wait } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect } from 'react';
import './App.scss';
import WeatherList  from './components/weatherlist/WeatherList';
let apiKey = process.env.REACT_APP_API_KEY
let baseUrl = process.env.REACT_APP_BASE_URL

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getWeather(location)
  }
  function getWeather(place){
    // weather?lat={lat}&lon={lon}&appid={apiKey}
    fetch(`${baseUrl}forecast?appid=${apiKey}&q=${place}`)
      .then(response => response.json())
      .then(data => {
        setWeather(data)
        console.log(data)
      });
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className={weather?.city?.name ? '' : 'centered'}>
        <input type="text" placeholder='Enter location'
          autoFocus
          value={location}
          onChange={e => setLocation(e.target.value)}></input>
        <button type='submit' value="Submit">Get Weather</button>
      </form>
      {weather?.city?.name ? <h1>Weather Forcast For: {weather?.city?.name}</h1> :''}
      <WeatherList list={weather?.list}></WeatherList>
    </div>
  );
}

export default App;