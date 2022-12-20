import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import FakeWeather from "./data/FakeWeather.json";


import Search from "./components/Search";

import Daily from "./components/daily-weather";
import Mainpage from "./components/Mainpage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      FakeWeather
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };


  

  render() {


     




    console.log(((this.state.FakeWeather.list[13].main.temp)-273.15).toFixed(0))
    console.log(this.state.FakeWeather
      )

    return (
      <div className="app">
        <Search />
        <Mainpage 
        temp_min={((this.state.FakeWeather.list[4].main.temp_min )-273.15).toFixed(0)}
        temp_max={((this.state.FakeWeather.list[4].main.temp_max)-273.15).toFixed(0)}
        humidity={this.state.FakeWeather.list[4].main.humidity}
        pressure={this.state.FakeWeather.list[4].main.pressure}


        
        />
        <Daily 
        // temparature 
          temp03={((this.state.FakeWeather.list[5].main.temp)-273.15).toFixed(0)}
          temp06={((this.state.FakeWeather.list[6].main.temp)-273.15).toFixed(0)}
          temp09={((this.state.FakeWeather.list[7].main.temp)-273.15).toFixed(0)}
          temp12={((this.state.FakeWeather.list[8].main.temp)-273.15).toFixed(0)}
          temp15={((this.state.FakeWeather.list[9].main.temp)-273.15).toFixed(0)}
          temp18={((this.state.FakeWeather.list[10].main.temp)-273.15).toFixed(0)}
          temp21={((this.state.FakeWeather.list[11].main.temp)-273.15).toFixed(0)}
          temp032={((this.state.FakeWeather.list[13].main.temp)-273.15).toFixed(0)}

          // time

          time03={this.state.FakeWeather.list[5].dt_txt.substring(10,16)}
          time06={this.state.FakeWeather.list[6].dt_txt.substring(10,16)}
          time09={this.state.FakeWeather.list[7].dt_txt.substring(10,16)}
          time12={this.state.FakeWeather.list[8].dt_txt.substring(10,16)}
          time15={this.state.FakeWeather.list[9].dt_txt.substring(10,16)}
          time18={this.state.FakeWeather.list[10].dt_txt.substring(10,16)}
          time21={this.state.FakeWeather.list[11].dt_txt.substring(10,16)}
          
        
        />

      </div>
      
    );
  }
}

export default App;
