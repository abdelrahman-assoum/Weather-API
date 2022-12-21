import React, { Component } from 'react'
import './App.css'
import mostlycloudy from './img/weather-icons/mostlycloudy.svg'
import clear from './img/weather-icons/clear.svg'
import FakeWeather from './data/FakeWeather.json'
import drizzle from './img/weather-icons/drizzle.svg'
import fog from './img/weather-icons/fog.svg'
import cloudy from './img/weather-icons/cloudy.svg'
import partlycloudy from './img/weather-icons/partlycloudy.svg'
import rain from './img/weather-icons/rain.svg'
import snow from './img/weather-icons/snow.svg'
import storm from './img/weather-icons/storm.svg'

import Search from './components/Search'

import Daily from './components/daily-weather'
import Mainpage from './components/Mainpage'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state = {
      data : [],
      isFetched:false
    }
  }

  ApiKey = '27fa1bdd836fd3b83295c9fca3c70a11'
  url = `http://api.openweathermap.org/data/2.5/forecast?q=Birmingham&cnt=8&units=metric&appid=${this.ApiKey}`
  handleInputChange = (value) => {
    this.setState({ name: value })
  }
  /*componentDidMount(){
    fetch(this.url)
    .then(response=>response.json())
    .then(response=>{
      this.setState({
        data: response.list
      })
      console.log(response.list)
    })
  }*/
  handleClick(e){
    let ApiKey = '27fa1bdd836fd3b83295c9fca3c70a11'
    let link=`http://api.openweathermap.org/data/2.5/forecast?q=${e}&cnt=8&units=metric&appid=${this.ApiKey}`
    fetch(link)
    .then(response=>response.json())
    .then(response=>{
      this.setState({
        data: response.list,
        isFetched: true
      })
      })
  }

  

  

  render() {
    console.log(this.state.data[0])
    console.log(this.state.data)

    const imageSrc = (image) => {
      switch (image) {
        case "clouds":
          return cloudy;
        case "mostlycloudy":
          return mostlycloudy;
        case "partlycloudy":
          return partlycloudy;
        case "snow":
          return snow;
        case "storm":
          return storm;
        case "rain":
          return rain;
        case "fog":
          return fog;
        case "drizzle":
          return drizzle;
        case "clear":
          return clear
      }
    };
    return (
      <div className="app">
        <Search method={this.handleClick} />
        {this.state.isFetched && <Mainpage
          temp_min={this.state.data[0].main.temp_min}
          temp_max={this.state.data[0].main.temp_max}
          humidity={this.state.data[0].main.humidity}
          pressure={this.state.data[0].main.pressure}
          weather={this.state.data[0].weather}
          imageSrc={imageSrc}
        />}
        {this.state.isFetched && <Daily
          // temparature
          temp03={(this.state.data[1].main.temp ).toFixed(
            0,
          )}
          temp06={(this.state.data[2].main.temp ).toFixed(
            0,
          )}
          temp09={(this.state.data[3].main.temp ).toFixed(
            0,
          )}
          temp12={(this.state.data[4].main.temp )}
          temp15={this.state.data[5].main.temp }
          temp18={this.state.data[6].main.temp }
          temp21={this.state.data[7].main.temp}
          temp032={(this.state.data[0].main.temp - 273.15).toFixed(
            0,
          )}


          path={this.state.data}
          imageSrc={imageSrc}
          // time

                  
          time03={this.state.data[3].dt_txt.substring(10, 16)}
          time06={this.state.data[4].dt_txt.substring(10, 16)}
          time09={this.state.data[5].dt_txt.substring(10, 16)}
          time12={this.state.data[6].dt_txt.substring(10, 16)}
          time15={this.state.data[7].dt_txt.substring(10, 16)}
          time18={this.state.data[0].dt_txt.substring(10, 16)}
          time21={this.state.data[1].dt_txt.substring(10, 16)}
            

         

        />}
      </div>
    )
  }
}

export default App
