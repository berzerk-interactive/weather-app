import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

let apiKey = process.env.REACT_APP_API_KEY
let city = 'golden'
let baseUrl = process.env.REACT_APP_BASE_URL

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState();
  const [coordinates, setCoordinates] = useState();
  useEffect(() => {
    getCoordinates()
    // getWeather(city)
    getWeather()
  }, []);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`Submitting Name ${location}`)
    getWeather(location)
  }
  function getCoordinates() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;
      var lat = crd.latitude.toString();
      var lng = crd.longitude.toString();
      var coords = [lat, lng];
      console.log(`Latitude: ${lat}, Longitude: ${lng}`);
      // getCity(coordinates);
      setCoordinates({
        lat:lat,
        lng:lng
      })
      console.log(coordinates);
      return;

    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }
  function getWeather(place){
    // getCoordinates()
    // weather?lat={lat}&lon={lon}&appid={apiKey}
    // fetch(`${baseUrl}forecast?appid=${apiKey}&q=${place}`)
    // fetch(`${baseUrl}forecast?appid=${apiKey}&lat=${coordinates.lat}&lon=${coordinates.lng}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setWeather(data)
    //     console.log(data)
    //   });
  }

  // let weatherList = weather?.list?.map((item, index) => {
  //   return <li key={index}>{item.dt}</li>
  // })
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
        <ul>
          {weather?.list?.map((item, index) => {
            return <li key={index}>
              <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} width="50" height="50" />
                <span>{item.dt_txt} </span>
                <span>{item.weather[0].description}</span>
              </li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
// {
//   "dt": 1640919600,
//     "main": {
//     "temp": 277.77,
//       "feels_like": 272.57,
//         "temp_min": 276.98,
//           "temp_max": 277.77,
//             "pressure": 982,
//               "sea_level": 982,
//                 "grnd_level": 807,
//                   "humidity": 29,
//                     "temp_kf": 0.79
//   },
//   "weather": [
//     {
//       "id": 800,
//       "main": "Clear",
//       "description": "clear sky",
//       "icon": "01n"
//     }
//   ],
//     "clouds": {
//     "all": 0
//   },
//   "wind": {
//     "speed": 8.82,
//       "deg": 254,
//         "gust": 20.39
//   },
//   "visibility": 10000,
//     "pop": 0.04,
//       "sys": {
//     "pod": "n"
//   },
//   "dt_txt": "2021-12-31 03:00:00"
// }