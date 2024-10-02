import "./Weatherforecast.css";
import Weathericon from "./Weathericon";
import axios from "axios";
export default function Weatherforecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "eac360db5fc86ft86450f3693e73o43f";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="weatherforecast">
      <div className="row">
        <div className="col">
          <div className="weatherforecast-day">wed</div>
          <Weathericon code="clear-sky-night" size={36} />
          <div className="weatherforecast-temperature">
            <span className="weatherforecast-temp-max">30&deg;</span>
            <span className="weatherforecast-temp-min">23&deg;</span>
          </div>
        </div>
      </div>
    </div>
  );
}
