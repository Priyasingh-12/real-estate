import { FaUser } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";

import './login.css';

const Login = () => {
  return (
    <div className="full">
    <div className="wrapper">

    <span className="bg-animate"></span>
    <span className="bg-animate2"></span>

      <div className="form-box login">
      <FaUser className="use"/>

      <h2>Login Page</h2>
        <form className="my form">
          <div className="input-box">
            <input type="text" required  autoComplete="new email"/>
            <label>Email</label>
            <FaUser className="pio"/>
          </div>
          <div className="input-box">
            <input type="password" required  autoComplete="new password"/>
            <label>Password</label>
            <FaUnlockAlt  className="pio"/>

          </div>
          <button type="submit" className="btn">Login</button>
          <div className="reglnk">
            <p>Don't have an account? <a  href ="/signup" className="register">Login</a></p>
          </div>
        </form>
      </div>
      <div className="info-text login">
        <h2>Welcome Back</h2>
        <p>
          lorem
        </p>
      </div>
    </div>
    </div>

  );
};

export default Login;
