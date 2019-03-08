import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Login from './Login';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/panel/page1" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
