import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import '../node_modules/destyle.css/destyle.css'
import './stylesheets/main.scss';
import SpeedTyper from './components/organisms/SpeedTyper'
import AppHeader from './components/organisms/AppHeader'
import LandingHeader from './components/organisms/LandingHeader'
import RegisterForm from './components/molecules/RegisterForm';
import LandingGraphic from './components/molecules/LandingGraphic';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/play">
            <AppHeader></AppHeader>
            <SpeedTyper></SpeedTyper>
          </Route>
          <Route path="/">
            <LandingHeader></LandingHeader>
            <div className="row">
              <RegisterForm></RegisterForm>
              <LandingGraphic></LandingGraphic>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
