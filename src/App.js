import React, { Component } from 'react'
import mostlycloudy from './img/weather-icons/mostlycloudy.svg';
import clear from './img/weather-icons/clear.svg';
import './App.css'

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abdel Rahman"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <header>
          <form action="#">
            <input type="search" value="Type in the city name" />
            <button type="submit">FIND WEATHER</button>
          </form>
        </header>

        <main className="app__main">
          <figure>
            <img src={mostlycloudy} />
            <figcaption>overcast clouds</figcaption>
          </figure>
          <div class="main-text">
            <span>
              <b>Temperature</b>{' '}
              <span className="temperatue1">10&deg; to 11&deg; C</span>{' '}
            </span>
            <p>
              <b>Humidity</b>
              <span className="pourcentage-1">78%</span> <b>Pressure</b>{' '}
              <span className="pourcentage-2">1008.48</span>
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
              <img src={clear} />
              <span>17&deg;C</span>
          </article>

          <article>
              <time>15:00</time>
              <img src={clear} />
              <span>16&deg;C</span>
          </article>

          <article>
              <time>21:00</time>
              <img src={clear} />
              <span>8&deg;C</span>
          </article>

          <article>
              <time>03:00</time>
              <img src={mostlycloudy} />
              <span>13&deg;C</span>
          </article>
        </div>
        </div>
    );
  }
}

export default App;
