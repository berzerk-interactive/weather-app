import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

let apiKey = process.env.REACT_APP_API_KEY
let city = 'golden'
let baseUrl = process.env.REACT_APP_BASE_URL

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState();
  useEffect(() => {
    getWeather(city)
  }, []);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting Name ${location}`)
    getWeather(location)
  }
  function getWeather(place){
    fetch(`${baseUrl}forecast?appid=${apiKey}&q=${place}`)
      .then(response => response.json())
      .then(data => console.log(data));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter location'
            value={location}
            onChange={e => setLocation(e.target.value)}></input>
          <button type='submit' value="Submit">Get Weather</button>
        </form>

      </header>
    </div>
  );
}

export default App;
