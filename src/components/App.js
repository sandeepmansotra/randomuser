import React, { Component } from "react";
import SearchUser from "./SearchUser";
import "../styles/index.css";
import RandomUser from "./RandomUser";

class App extends Component {
  render() {
    return (
      <div>
        <SearchUser />
        <RandomUser />
      </div>
    );
  }
}

export default App;
