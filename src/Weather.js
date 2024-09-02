import React from "react";
import "./Weather.css";
export default function Weather() {
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
            <input type="submit" className="submit btn btn-primary w-100 " />
          </div>
        </div>
      </form>
      <h1>New york</h1>
      <ul>
        <li>monday 11:00</li>
        <li>sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-7">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sun"
            />

            <span className="temperature">23</span>
            <span className="unity">&deg;C|&deg;F</span>
          </div>
        </div>
        <div className="col-4">
          <uL>
            <li>precipitation:0%</li>
            <li>humidity:59%</li>
            <li>wind:13km/h</li>
          </uL>
        </div>
      </div>
    </div>
  );
}
