import React from "react";
import Weathericon from "./Weathericon";
import Formatedate from "./Formatedate";
export default function Weatherinfo(props) {
  return (
    <div className="weatherinfo">
      <h1>{props.info.city}</h1>
      <ul>
        <li>
          <Formatedate date={props.info.date} />
        </li>
        <li className="text-capitalize">{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-7">
          <div className="clearfix">
            <div>
              <Weathericon code={props.info.icon} size={52} />
            </div>

            <span className="temperature">
              {Math.round(props.info.temperature)}
            </span>
            <span className="unity">&deg;C|&deg;F</span>
          </div>
        </div>
        <div className="col-4">
          <uL>
            <li>Humidity{props.info.humidity}%</li>
            <li>Wind {Math.round(props.info.wind)}km/h</li>
          </uL>
        </div>
      </div>
    </div>
  );
}
