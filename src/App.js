import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import * as pages from './pages/index';

import './pages/styles/login.css';
import './pages/styles/wallet.css';

export class App extends Component {
  render() {
    return (
      <>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <Switch>
          <Route exact path="/" component={ pages.Login } />
          <Route path="/carteira" component={ pages.Wallet } />
        </Switch>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
      </>
    );
  }
}

export default App;
