import React from 'react';
import '../node_modules/destyle.css/destyle.css'
import './stylesheets/main.scss';
import SpeedTyper from './components/organisms/SpeedTyper'
import AppHeader from './components/organisms/AppHeader'

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <SpeedTyper></SpeedTyper>
    </div>
  );
}

export default App;
