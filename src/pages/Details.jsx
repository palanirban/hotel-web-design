import { Link } from "react-router-dom";
import "../css/details.css";

export default function Details() {
  return (
    <>
      <main>
        <div className="container">
          <div className="nav">
            <div className="logo-container">
              <img
                className="details-logo"
                src="Images\login-logo.png"
                alt="logo"
              />
            </div>
            <div>
              <p className="nav-text">Hotel {">"} Details</p>
            </div>
            <Link to="/login" className="book-section">
              <span>Book now</span>
              <div className="booking-logo">
                <img src="Images\arrow.svg" alt="" />
              </div>
            </Link>
          </div>

          <div className="d-mid">
            <div className="details-start">
              <p className="d-heading">Blue origin Fams Hotel</p>
              <span className="d-sub">Salt lake,Kolkata</span>
            </div>
            <div className="d-images">
              <div className="left">
                <img src="Images\hotel1.png" alt="" className="d-img" />
              </div>
              <div className="right">
                <div>
                  <img src="Images\hotel2.png" alt="" className="d-img" />
                </div>
                <div>
                  <img src="Images\hotel2.png" alt="" className="d-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="d-about">
            <div>
              <p className="about">About the place</p>
              <p className="about-sub">
                Minimal techno is a minimalist subgenre of techno music. It is
                characterized by a stripped-down <br /> aesthetic that exploits
                the use of repetition and understated development. Minimal
                techno is thought
                <br /> to have been originally developed in the early 1990s by
                Detroit-based producers Robert Hood and <br />
                Daniel Bell.
              </p>
              <p className="about-sub">
                Such trends saw the demise of the soul-infused techno that
                typified the original Detroit sound. Robert <br /> Hood has
                noted that he and Daniel Bell both realized something was
                missing from techno in the <br /> post-rave era.
              </p>
            </div>
            <div className="about-right">
              <div className="about-container">
                <p className="about">Start Booking</p>
                <span className="sub-amount">
                  <span className="amount">$200</span> per Day
                </span>
                <div className="book-btn">
                  <p>Book Now!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="option-container">
            <div className="option">
              <div className="option-icons">
                <img src="Images\bed.svg" alt="" className="icon-img" />
                <span className="option-name">
                  <span className="opt-no">1</span> bedroom
                </span>
              </div>
              <div className="option-icons">
                <img src="Images\livingroom.svg" alt="" className="icon-img" />
                <span className="option-name">
                  <span className="opt-no">1</span> living room
                </span>
              </div>
              <div className="option-icons">
                <img src="Images\bedroom.svg" alt="" className="icon-img" />
                <span className="option-name">
                  <span className="opt-no">1</span> bathroom
                </span>
              </div>
              <div className="option-icons">
                <img src="Images\dine.svg" alt="" className="icon-img" />
                <span className="option-name">
                  <span className="opt-no">1</span> dining room
                </span>
              </div>
              <div className="option-icons">
                <img src="Images\wifi.svg" alt="" className="icon-img" />
                <span className="option-name">
                  <span className="opt-no">10</span> mb/s
                </span>
              </div>
              <div className="option-icons">
                <img src="Images\ac.svg" alt="" className="icon-img" />
                <span className="option-name">
                  <span className="opt-no">7</span> unit ready
                </span>
              </div>
              <div className="option-icons">
                <img src="Images\refri.svg" alt="" className="icon-img" />
                <span className="option-name">
                  <span className="opt-no">1</span> refrigerator
                </span>
              </div>
              <div className="option-icons">
                <img src="Images\tv.svg" alt="" className="icon-img" />
                <span className="option-name">
                  <span className="opt-no">2</span> television
                </span>
              </div>
            </div>
          </div>
          
          <div className="picture-container">
            <p className="about">Treasure to Choose</p>
            <div className="all-pics">
                <div className="pic">
                    <img src="Images\pic1.png" alt="" className="img-size"/>
                    <span className="pic-about">Green Lake</span>
                    <span className="option-name">
                        Nature
                    </span>
                </div>
                <div className="pic">
                    <img src="Images\pic2.png" alt="" className="img-size"/>
                    <span className="pic-about">Dog Clubs</span>
                    <span className="option-name">
                        Pool
                    </span>
                </div>
                <div className="pic">
                    <div className="img-box">
                    <img src="Images\pic1.png" alt="" className="img-size"/>
                    <div className="popular">
                        <span className="pop-text">Popular Choice</span>
                    </div>
                    </div>
                    <span className="pic-about">Labour & wait</span>
                    <span className="option-name">
                        shopping
                    </span>
                </div>
                <div className="pic">
                    <img src="Images\pic2.png" alt="" className="img-size"/>
                    <span className="pic-about">Snorkeling</span>
                    <span className="option-name">
                        Beach
                    </span>
                </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
