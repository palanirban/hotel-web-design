import { Link } from "react-router-dom";
import "../css/login.css";

export default function Login() {
  return (
    <>
      <div className="main">
        <div className="left-section">
          <img src="Images\login-bg.png" alt="" className="img1" />
          <div className="img2">
            <img src="Images\login-logo.png" alt="" className="bg-logo"/>
          </div>
        </div>
        <div className="right-section">
          <div className="form-start">
            <div className="f-header">
              <p>Login</p>
            </div>
            <div className="f-mid">
              <div className="mid-field">
                <div className="fields">
                  <div className="i-field">
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="input-fields"
                    />
                  </div>
                  <div className="i-field">
                    <input
                      type="text"
                      placeholder="Enter Password"
                      className="input-fields"
                    />
                  </div>
                </div>
                <span className="pass">Forgot Password?</span>
              </div>
              <div className="login">
                <p className="submit">Login</p>
              </div>
            </div>
            <div className="signIn">
              <div className="dash"></div>
              <div className="title">
                <p>sign in with</p>
              </div>
              <div className="dash"></div>
            </div>
            <div className="icons">
              <div className="i-br">
                <img src="Images\google.svg" alt="" className="icon-img"/>
              </div>
              <div className="i-br">
                <img src="Images\facebook.svg" alt="" className="icon-img"/>
              </div>
              <div className="i-br">
                <img src="Images\apple.svg" alt="" className="icon-img"/>
              </div>
            </div>
            <div className="footer">
              <p style={{color: 'gray'}}>Not registered yet ? <Link to='/register' style={{color: "blue", textDecoration: "none"}}>Create Account</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
