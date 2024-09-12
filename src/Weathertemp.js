import React, { useState } from "react";
export default function Weathertemp(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit(celsius);
  }
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|{" "}
          <a href="/" onclick={showFahrenheit}>
            &deg;f
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <di className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onclick={showCelsius}>
            &deg;c
          </a>
          |&deg;f
        </span>
      </di>
    );
  }
}
