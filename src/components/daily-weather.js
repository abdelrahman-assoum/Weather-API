

import React from "react";
import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";


class daily_weather extends React.Component {
    state = {
        input: ""
    };

    render() {
        return (
            <div className="hourly-weather">
          <article>
              <time>03:00</time>
              <img src={mostlycloudy} />
              <span className="space">8&deg;C</span>
          </article>

          <article>
              <time>06:00</time>
              <img src={mostlycloudy} />
              <span className="space">9&deg;C</span>
          </article>

          <article>
              <time>09:00</time>
              <img src={clear} />
              <span className="space">14&deg;C</span>
          </article>

          <article>
              <time>12:00</time>
              <img src={clear}  />
              <span className="space">17&deg;C</span>
          </article>

          <article>
              <time>15:00</time>
              <img src={clear}  />
              <span className="space">16&deg;C</span>
          </article>

          <article>
              <time>21:00</time>
              <img src={clear} />
              <span className="space">8&deg;C</span>
          </article>

          <article>
              <time>03:00</time>
              <img src={mostlycloudy}/>
              <span className="space" >13&deg;C</span>
          </article>
        </div>
            );
        }
    }
    export default daily_weather;