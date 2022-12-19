import React, { Component } from "react";
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
        <nav className="Navbar">
          <input type="text" id="city-search" placeholder="Type in a city name" />
          <button className="findb">Find Weather</button>
        </nav>
        <main className="hero">
        <figure>
            <img src="https://placekitten.com/200/300" className="hero-image" />
            <figcaption>overcast clouds</figcaption>
          </figure>
         <div class="main-text">
            <p>
              <div>
              <b>Temperature</b>
              <span className="temperatue1">10&deg; to 11&deg; C</span>
              </div>
              <b>Humidity</b>
              <span className="pourcentage-1">78%</span> <b>Pressure</b>
              <span className="pourcentage-2">1008.48</span>
            </p>
          </div>
        </main>

        <div className="hourly-weather">
          <article>
              <time>03:00</time>
              <img src="https://placekitten.com/g/200/300" />
              <span>8&deg;C</span>
          </article>

          <article>
              <time>06:00</time>
              <img src="https://placekitten.com/g/200/300" />
              <span>9&deg;C</span>
          </article>

          <article>
              <time>09:00</time>
              <img src="https://placekitten.com/g/200/300" />
              <span>14&deg;C</span>
          </article>

          <article>
              <time>12:00</time>
              <img src="https://placekitten.com/g/200/300" />
              <span>17&deg;C</span>
          </article>

          <article>
              <time>15:00</time>
              <img src="https://placekitten.com/g/200/300" />
              <span>16&deg;C</span>
          </article>

          <article>
              <time>21:00</time>
              <img src="https://placekitten.com/g/200/300" />
              <span>8&deg;C</span>
          </article>

          <article>
              <time>03:00</time>
              <img src="https://placekitten.com/g/200/300"/>
              <span>13&deg;C</span>
          </article>
        </div>
        </div>
      
      
    );
  }
}

export default App;
