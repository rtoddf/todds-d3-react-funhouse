import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Simple01 from "./Simple01";

import ChartWrapper from './Simple01/ChartWrapper';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/simple01" render={() => (<Simple01 />)} />
          </Switch>
        </BrowserRouter>
        {/* <ChartWrapper /> */}
      </>
    );
  }
}

export default App;
