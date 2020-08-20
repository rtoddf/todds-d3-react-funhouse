import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Simple01Hooks from "./Simple/Hooks/Simple01";
import Simple01Class from "./Simple/Class/Simple01";

import AlbersUsaClass from "./Maps/Class/Projections/AbersUsa";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/simple/hooks/simple01" render={() => (<Simple01Hooks />)} />
            <Route exact path="/simple/class/simple01" render={() => (<Simple01Class />)} />

            <Route exact path="/maps/class/projections/albersusa" render={() => (<AlbersUsaClass />)} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
