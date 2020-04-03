import React from 'react';
import {
  Link
} from 'react-router-dom';

function RegisterForm() {
  return (
    <div className="registration-form">
      <form method="post">
        <div className="registration-title">Register for an Account</div>
          <input class="registration-input" placeholder="Username or Email" name="username"></input>
          <input type='password' class="registration-input password-input" placeholder="Password" name="password"></input>
          <div class="tos-container">
            <input id="terms-of-service" type="checkbox"/>
            <label for="terms-of-service">I agree to the terms of service.</label>
          </div>
          <button class="submit-button" id="submit-button" type="button">Register</button>
          
      </form>
      <div className="registration-divider">~OR~</div>
      <div className="skip-registration">
        <div>Click below to skip registration.</div>
        <Link to="/play"><div className="skip-registration-button">PLAY AS A GUEST</div></Link>
      </div>
    </div>
  );
}

export default RegisterForm;