import React from 'react';
import {
  Link
} from 'react-router-dom';

function LandingHeader() {
  return (
    <div className="header-container landing-header">
      <div className="logo">SpeedTyper</div>
      <div className="spacer"></div>
      <div className="promo">
        A project by <a href="http://linkedin.com/in/gray-lewis">Gray Lewis</a>.
      </div>
    </div>
  );
}

export default LandingHeader;