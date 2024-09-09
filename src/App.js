import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather defaultCity="Kigali" />
        </header>
        <footer>
          <div className="footer">
            this project was coded by{" "}
            <a
              href="https://www.shecodes.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              U.M.Belyse
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/mahoro-belyse/weather_react"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://magenta-starburst-cf5411.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
