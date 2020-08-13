import React, { Component } from 'react';
import Test from './Test';

class App extends Component {
  state = {
    personClicks: 0
  }

  personClicked = () => {
    this.setState({personClicks: this.state.personClicks + 1})
  }

  render() {
    return (
      <div>
        <Test person="Todd" personClicked={this.personClicked} />
        <Test person="Larry" personClicked={this.personClicked}  />
        <Test person="Marcie" personClicked={this.personClicked}  />
        Person Clicks: {this.state.personClicks}
      </div>
    );
  }
}

export default App;
