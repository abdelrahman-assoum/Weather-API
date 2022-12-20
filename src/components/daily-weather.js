

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
              <time>{this.props.time03}</time>
              <img src={mostlycloudy} />
              <span className="space">{this.props.temp03}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time06}</time>
              <img src={mostlycloudy} />
              <span className="space">{this.props.temp06}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time09}</time>
              <img src={clear} />
              <span className="space">{this.props.temp09}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time12}</time>
              <img src={clear}  />
              <span className="space">{this.props.temp12}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time15}</time>
              <img src={clear}  />
              <span className="space">{this.props.temp15}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time18}</time>
              <img src={clear} />
              <span className="space">{this.props.temp18}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time21}</time>
              <img src={mostlycloudy}/>
              <span className="space" >{this.props.temp21}&deg;C</span>
          </article>
        </div>
            );
        }
    }
    export default daily_weather;