import React, { useState, useEffect } from 'react';
import './App.scss';
import WeatherList  from './components/weatherlist/WeatherList';
let apiKey = process.env.REACT_APP_API_KEY
let baseUrl = process.env.REACT_APP_BASE_URL


function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState();
  const [error, setError] = useState()
  useEffect(() => {
    if(location?.length == 0){
      setError(null)
    }
  }, [location])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    getWeather(location)
  }
  const handleReset = (evt) => {
    evt.preventDefault();
    setLocation(null)
    setWeather(null)
  }
  function handleErrors(response) {
    if (!response.ok) {
      console.log(response);
      setError(`${response.status} ${response.statusText} Please try again`)
      throw Error(response.statusText);
    }
    return response;
  }
  function getWeather(place){
    fetch(`${baseUrl}forecast?appid=${apiKey}&q=${place}`)
      .then(handleErrors)
      .then(response => response.json())
      .then(data => {
        setWeather(data)
        console.log(data)
      });
  }



  return (
    <div className="App">
      <h1>Simple. Cool. Best Weather App. Ever.</h1>
      {weather?.city?.name ?
        (<form onSubmit={handleReset}>
          <button type='submit' value="Submit" className="pure-button pure-button-warning">Get a different city</button>
        </form>)
        :
        (<form onSubmit={handleSubmit} className={weather?.city?.name ? 'pure-form' : 'pure-form centered'} >
          <input type="text" placeholder='Enter City'
            autoFocus
            value={location}
            onChange={e => setLocation(e.target.value)}></input>
          <button type='submit' value="Submit" className="pure-button pure-button-primary">Get Weather Forecast</button>
          <div className='error'>
            {error}
          </div>
        </form>)
      }

      {weather?.city?.name ? <h1>Weather Forcast For: {weather?.city?.name}</h1> :''}
      <WeatherList list={weather?.list}></WeatherList>
    </div>
  );
}

export default App;