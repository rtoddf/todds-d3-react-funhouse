import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Simple01 from "./Simple/Hooks/Simple01";

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/simple/hooks/simple01" render={() => (<Simple01 />)} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
