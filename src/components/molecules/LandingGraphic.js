import React from 'react';

function LandingGraphic() {
  return (
    <div className="graphic-container">
      <div className="graphic-header">
          <div className="logo">SpeedTyper</div>
          <div className="header-text">is the best way to improve your typing speed</div>
        </div>
      <div className="landing-graphic">
        <div className="graphic-col graphic-col-1">
          <div className="line line-1"></div>
          <div className="text-line line-2">Typing fast saves time filing taxes, writing essays, and doing homework.</div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
          <div className="line line-5"></div>
          <div className="line line-6"></div>
          <div className="line line-7"></div>
          <div className="line line-8"></div>
        </div>
        <div className="graphic-col graphic-col-2">
          <div className="line line-1"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
          <div className="line line-5"></div>
          <div className="line line-6"></div>
          <div className="text-line line-2">Typing fast saves time filing taxes, writing essays, and doing homework.</div>
          <div className="line line-7"></div>
          <div className="line line-8"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingGraphic;
