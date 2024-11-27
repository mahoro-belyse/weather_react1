import React, { useState } from "react";
import "./Weatherforecast.css";
import axios from "axios";
import Weatherforecastday from "./Weatherforecastday";

export default function Weatherforecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="weatherforecast">
        <div className="row">
          <div className="col">
            <Weatherforecastday data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
