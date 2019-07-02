import React, { Component } from "react";

class TechList extends Component {
  state = {
    techs: ["Node.js", "ReactJS", "React Native"]
  };

  render() {
    return (
      <ul>
        <li>{this.state.techs[0]}</li>
        <li>{this.state.techs[1]}</li>
        <li>{this.state.techs[2]}</li>
      </ul>
    );
  }
}

export default TechList;
