import React from 'react';
import {
  Link
} from 'react-router-dom';

function AppHeader() {
  return (
    <div className="header-container">
      <div className="logo"><Link to='/'>SpeedTyper</Link></div>
      <div className="game-title-container"><div class="game-title">Practice</div></div>
      <div className="spacer"></div>
    </div>
  )
}

export default AppHeader;
