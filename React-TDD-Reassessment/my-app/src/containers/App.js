import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import CityPage from './CityPage';
import '../styles/App.css';
import NavBar from '../components/NavBar';

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path='/cityweather'><CityPage /></Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
