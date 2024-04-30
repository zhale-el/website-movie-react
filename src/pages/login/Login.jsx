import React from "react";
import "./Login.css";
import Logo from "../../assets/images/logo.png";

const Login = () => {
  return (
    <div className="login">
      <img src={Logo} alt="logo image" className="login__logo" />
      <div className="login__form">
        <h1 className="login__title">Sign Up</h1>
        <form className="form">
          <input type="text" className="form__input" placeholder="Your name" />
          <input type="email" className="form__input" placeholder="Email" />
          <input
            type="password"
            className="form__input"
            placeholder="Password"
          />
          <button className="form__btn">Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>Need Help ?</p>
          </div>
        </form>

        <div className="login-switch">
          <p>
            New to Netflix ? <span>Sign Up Now</span>
          </p>

          <p>
            Already have account ? <span>Sign In Now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
