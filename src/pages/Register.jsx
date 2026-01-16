import { Link } from "react-router-dom";
import "../css/register.css";

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
              <p>Register</p>
            </div>
            <div className="f-mid">
              <div className="mid-field">
                <div className="fields">
                  <div className="i-field">
                    <label htmlFor="email">Email Id</label>
                    <input
                      type="text"
                      placeholder="Enter email id"
                      className="input-fields"
                    />
                  </div>
                  <div className="i-field">
                    <label htmlFor="password">Set Password</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      className="input-fields"
                    />
                  </div>
                  <div className="i-field">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type="text"
                      placeholder="Re enter Password"
                      className="input-fields"
                    />
                  </div>
                </div>
              </div>
              <div className="login">
                <p className="submit">Register</p>
              </div>
            </div>
            <div className="signIn">
              <div className="dash"></div>
              <div className="title">
                <p>Or Register with</p>
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
              <p style={{color: 'gray'}}>Already register ? <Link to='/login' style={{color: "blue", textDecoration: "none"}}> Log in to your Account</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
