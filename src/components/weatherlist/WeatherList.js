import React, { useState, useEffect } from 'react';
import './weatherlist.scss'
export default function WeatherList({list}) {
    function kToF(temp) {
        return ((temp * 9 / 5) - 459.67).toFixed(2)
    }   
    return (
        <ul id="weatherlist">
            {list?.map((item, index) => {
                return <li key={index}>
                            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                            <div>{item.dt_txt} </div>
                            <h2>{item.weather[0].description}</h2>
                            <h3>Min: {kToF(item.main.temp_min)}F Max: {kToF(item.main.temp_max)}F</h3>
                        </li>
                    })}
        </ul>)


}