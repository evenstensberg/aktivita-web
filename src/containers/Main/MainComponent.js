import React, { PureComponent } from "react";
import PlayStoreComponent from "./PlayStoreComponent";
import AppStoreComponent from "./AppStoreComponent";
import background from "../../assets/images/bkg.png";

import "./main.scss";

class MainComponent extends PureComponent {
  render() {
    return (
      <div>
        <div className="main">
          <h1>Aktivita</h1>
          <p>- Coming soon</p>
        </div>
        <div className="stores">
          <PlayStoreComponent />
          <AppStoreComponent />
        </div>
        <div className="container">
          <img src={background} />
        </div>
      </div>
    );
  }
}

export default MainComponent;
