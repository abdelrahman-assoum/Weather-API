import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abdel Rahman&taleb khaddour"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <nav className="Navbar">
          <input type="text" id="city-search" placeholder="Type in a city name" />
          <button className="findb">Find Weather</button>
        </nav>
        <main className="hero">
        <figure>
            <img src={mostlycloudy} className="hero-image" />
            <figcaption><b>overcast clouds</b></figcaption>
          </figure>
         <div class="main-text">
            <p>
              <div class="temp1">
              <p className="litel"><b>Temperature</b>
              <span className="temperatue1 "> &nbsp;&nbsp;&nbsp;10&deg; to 11&deg; C </span></p>

              </div>
              <p class="pourcentage-1">
              <b>Humidity</b>
              <span className="pourcentage-1">&nbsp;&nbsp;78%&nbsp;&nbsp;</span> <b>Pressure</b>
              <span className="pourcentage-2">&nbsp;&nbsp;1008.48&nbsp;&nbsp;</span></p>
            </p>
          </div>
        </main>

        <div className="hourly-weather">
          <article>
              <time>03:00</time>
              <img src={mostlycloudy} />
              <span>8&deg;C</span>
          </article>

          <article>
              <time>06:00</time>
              <img src={mostlycloudy} />
              <span>9&deg;C</span>
          </article>

          <article>
              <time>09:00</time>
              <img src={clear} />
              <span>14&deg;C</span>
          </article>

          <article>
              <time>12:00</time>
              <img src={clear}  />
              <span>17&deg;C</span>
          </article>

          <article>
              <time>15:00</time>
              <img src={clear}  />
              <span>16&deg;C</span>
          </article>

          <article>
              <time>21:00</time>
              <img src={clear} />
              <span>8&deg;C</span>
          </article>

          <article>
              <time>03:00</time>
              <img src={mostlycloudy}/>
              <span>13&deg;C</span>
          </article>
        </div>
        </div>
      
      
    );
  }
}

export default App;
