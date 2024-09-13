import React from "react";
import Weathericon from "./Weathericon";
import Formatedate from "./Formatedate";
import Weathertemp from "./Weathertemp";
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
          <div className="d-flex">
            <Weathericon code={props.info.icon} size={42} />

            <Weathertemp celsius={props.info.temperature} />
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
