import React, { PureComponent } from "react";

import gif from "../../assets/images/main.gif";

import "./main.scss";

class MainComponent extends PureComponent {
  render() {
    return (
      <div className="container">
        <h1>Work In Progress</h1>
        <img src={gif} />
      </div>
    );
  }
}

export default MainComponent;
