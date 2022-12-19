import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";

class Mainpage extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
        <main className="hero">
        <figure>
            <img src={mostlycloudy} className="hero-image" />
            <figcaption><b>overcast clouds</b></figcaption>
          </figure>
         <div class="main-text">
            <p>
              <div class="temp1">
              <p className="hight"><b>Temperature</b>
              <span className="temperatue1 "> &nbsp;&nbsp;&nbsp;10&deg; to 11&deg; C </span></p>

              </div>
              <p class="pourcentage-1">
              <b>Humidity</b>
              <span className="pourcentage-1">&nbsp;&nbsp;78%&nbsp;&nbsp;</span> <b>Pressure</b>
              <span className="pourcentage-2">&nbsp;&nbsp;1008.48&nbsp;&nbsp;</span></p>
            </p>
          </div>
        </main>

        );
    }
  }
  export default Mainpage;