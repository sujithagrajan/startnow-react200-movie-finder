import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';

import MovieSearchContainer from './containers/MovieSearchContainer/index';
import MovieDetailContainer from './containers/MovieDetailContainer/index';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ MovieSearchContainer }/>
          <Route path='/movie/:id' component={ MovieDetailContainer }/>
        </div>
      </Router>
    );
  }
}
