

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
              <img src={this.props.imageSrc(this.props.path[0].weather[0].id)} />
              <span className="space">{this.props.temp03}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time06}</time>
              <img src={this.props.imageSrc(this.props.path[1].weather[0].id)} />
              <span className="space">{this.props.temp06}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time09}</time>
              <img src={this.props.imageSrc(this.props.path[2].weather[0].id)} />
              <span className="space">{this.props.temp09}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time12}</time>
              <img src={this.props.imageSrc(this.props.path[3].weather[0].id)}  />
              <span className="space">{this.props.temp12}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time15}</time>
              <img src={this.props.imageSrc(this.props.path[4].weather[0].id)}  />
              <span className="space">{this.props.temp15}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time18}</time>
              <img src={this.props.imageSrc(this.props.path[5].weather[0].id)} />
              <span className="space">{this.props.temp18}&deg;C</span>
          </article>

          <article>
              <time>{this.props.time21}</time>
              <img src={this.props.imageSrc(this.props.path[6].weather[0].id)}/>
              <span className="space" >{this.props.temp21}&deg;C</span>
          </article>
        </div>
            );
        }
    }
    export default daily_weather;