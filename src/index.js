import React, { Component, Suspense, lazy } from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

const HelloWorldComponent = lazy(() =>
  import("./containers/Main/MainComponent")
);

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <HelloWorldComponent />
        </Suspense>
      </>
    );
  }
}

const render = (Component) => {
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Component />} />
      </Routes>
    </BrowserRouter>
  );
};

render(App);

if (module.hot) {
  module.hot.accept(".", () => {
    const nextApp = require(".").default;
    render(nextApp);
  });
}
