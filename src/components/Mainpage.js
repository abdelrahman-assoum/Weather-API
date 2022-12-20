import React from 'react'
import mostlycloudy from '../img/weather-icons/mostlycloudy.svg'
class Mainpage extends React.Component {
  state = {
    input: '',
  }

  render() {
    return (
      <div>
      <main className="hero">
        <figure>
          <img src={mostlycloudy} className="hero-image" />
          <figcaption>
            <b>overcast clouds</b>
          </figcaption>
        </figure>
        <div className="main-text">
          <div>
            <div className="temp1">
              <p className="hight">
                <b>Temperature</b>
                <span className="temperatue1 ">
                  {' '}
                  &nbsp;&nbsp;&nbsp;{this.props.temp_min}&deg; to {this.props.temp_max}&deg; C{' '}
                </span>
              </p>
            </div>
            <p className="pourcentage-1">
              <b>Humidity</b>
              <span className="pourcentage-1">
                &nbsp;&nbsp;{this.props.humidity}&nbsp;&nbsp;
              </span>{' '}
              <b>Pressure</b>
              <span className="pourcentage-2">
                &nbsp;&nbsp;{this.props.pressure}&nbsp;&nbsp;
              </span>
            </p>
          </div>
        </div>
      </main>
      </div>
    )
  }
}
export default Mainpage
