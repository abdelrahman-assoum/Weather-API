import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <nav className="Navbar">
          <input onChange={e => this.setState({input: e.target.value})}type="text" id="city-search" placeholder="Type in a city name" />
          <button onClick={(e) => this.props.method(this.state.input)} className="findb">Find Weather</button>
        </nav>
    );


  }
}
export default Search;
