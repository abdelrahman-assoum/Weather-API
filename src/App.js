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
      name: "Taleb & assoum"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    console.log(FakeWeather)
    return (
      <div className="app">
        <Search />
        <Mainpage  />
        <Daily  />

      </div>
      
    );
  }
}

export default App;
