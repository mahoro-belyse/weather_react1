import React, { useState } from "react";
import Formatedate from "./Formatedate";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function exchange(response) {
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      date: new Date(response.data.dt * 1000),
      city: response.data.city,
    });
  }

  if (weather.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter your city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="submit btn btn-primary w-100 "
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li>
            <Formatedate date={weather.date} />
          </li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-7">
            <div className="clearfix">
              <img src={weather.icon} alt={weather.description} />

              <span className="temperature">
                {Math.round(weather.temperature)}
              </span>
              <span className="unity">&deg;C|&deg;F</span>
            </div>
          </div>
          <div className="col-4">
            <uL>
              <li>Humidity{weather.humidity}%</li>
              <li>Wind {Math.round(weather.wind)}km/h</li>
            </uL>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(exchange);
    return "loading....";
  }
}
