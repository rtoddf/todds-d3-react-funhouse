import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Simple01Hooks from "./Simple/Hooks/Simple01";
import Simple01Class from "./Simple/Class/Simple01";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/simple/hooks/simple01" render={() => (<Simple01Hooks />)} />
            <Route exact path="/simple/class/simple01" render={() => (<Simple01Class />)} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
