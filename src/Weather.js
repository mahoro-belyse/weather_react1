import React, { useState } from "react";
import Weatherinfo from "./Weatherinfo";
import Weatherfarecast from "./Weatherforecast";
import axios from "axios";
import "./Weather.css";
export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function exchange(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
      city: response.data.city,
    });
  }
  function search() {
    const apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(exchange);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weather.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="enter your city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <Weatherinfo info={weather} />
        <Weatherfarecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "loading....";
  }
}
