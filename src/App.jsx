import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useRef } from "react";

function App() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };

  var midsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };

  var hotelsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  };

  const sliderRef = useRef(null);
  const midSlider = useRef(null);
  const hotelSlider = useRef(null);

  const movetoNext = () => {
    sliderRef.current.slickNext();
  };

  const movetoPrev = () => {
    sliderRef.current.slickPrev();
  };

  const midData = [
    {
      id: 1,
      title: "Clinic",
      isActive: false,
    },
    {
      id: 2,
      title: "Training",
      isActive: true,
    },
    {
      id: 3,
      title: "Hospital",
      isActive: false,
    },
  ];

  return (
    <>
      <div className="main-header">
        <div className="header-background">
          <div className="container">
            <div className="header">
              <div className="logo-section">
                <div>
                  <img
                    className="web-logo"
                    src="Images\logo.png"
                    alt="logo"
                  />
                </div>
                <div className="book-section">
                  <span>Book now</span>
                  <div className="booking-logo">
                    <img src="Images\arrow.svg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="header-mid">
                  <span>Discover the best destinations in the world</span>
                  <p>Stay In The Moment</p>
                </div>
                <div className="booking">
                  <div className="booking-option">
                    <div className="option-item">
                      <img src="Images\plane-logo.svg" alt="" />
                      <p>Flights</p>
                    </div>
                    <div className="option-item">
                      <img src="Images\bus-logo.svg" alt="" />
                      <p>Buses</p>
                    </div>
                    <div className="active-option">
                      <img src="Images\hotel-logo.svg" alt="" />
                      <p>Hotels</p>
                    </div>
                    <div className="option-item">
                      <img src="Images\train-logo.svg" alt="" />
                      <p>Trains</p>
                    </div>
                    <div className="option-item">
                      <img src="Images\package-logo.svg" alt="" />
                      <p>packages</p>
                    </div>
                  </div>
                  <div className="booking-items">
                    <div>
                      <p className="attribute-name">
                        Select City, Location or Hotel Name
                      </p>
                      <div className="hotel-attribute">
                        <h2 className="title">Italy</h2>
                        <img src="Images\dropdown.svg" alt="" />
                      </div>
                      <input
                        type="text"
                        placeholder="Rome"
                        className="booking-data"
                      />
                    </div>
                    <div>
                      <p className="attribute-name">Check-in Date</p>
                      <div className="hotel-attribute">
                        <h2 className="title">
                          12 <span className="attribute">Jan'26</span>
                        </h2>
                        <img src="Images\dropdown.svg" alt="" />
                      </div>
                      <input
                        type="text"
                        placeholder="Monday"
                        className="booking-data"
                      />
                    </div>
                    <div>
                      <p className="attribute-name">Checkout Date</p>
                      <div className="hotel-attribute">
                        <h2 className="title">
                          12 <span className="attribute">Jan'26</span>
                        </h2>
                        <img src="Images\dropdown.svg" alt="" />
                      </div>
                      <input
                        type="text"
                        placeholder="Tuesday"
                        className="booking-data"
                      />
                    </div>
                    <div>
                      <p className="attribute-name">Room & Guest</p>
                      <div className="hotel-attribute">
                        <h2 className="title">
                          1 <span className="attribute">Room</span>, 2{" "}
                          <span className="attribute">guests</span>
                        </h2>
                        <img src="Images\dropdown.svg" alt="" />
                      </div>
                      <input
                        type="text"
                        placeholder="Rome"
                        className="booking-data"
                      />
                    </div>
                    <div>
                      <button className="search-button">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-slider">
        <div className="container">
          <div className="hero-content">
            <div className="hero-start">
              <p>Let's know Us</p>
              <img src="Images\right-arrow.svg" alt="" />
            </div>
            <div className="hero-info">
              <h1>
                Explore Stays, About Comfort, Your Stay <br />
                Our Priority
              </h1>
            </div>
            <div className="hero-cards">
              <div>
                <span className="card-text">About us</span>
                <h3>
                  Sunrise is a trusted platform <br /> connecting travelers with{" "}
                  <br /> top hotels across the <br /> country
                </h3>
                <div className="learn-more">
                  <span>Learn More</span>
                  <div className="booking-logo">
                    <img src="Images\arrow.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className="hero-card-middle">
                <div className="hero-card-background">
                  <div className="card-wrapper">
                    <div className="card-header">
                      <span className="card-info">Outdoor area</span>
                      <span className="more-info">
                        A Versatile platform <br /> Offering a wide range of{" "}
                        <br /> hotel options and services
                      </span>
                    </div>
                    <div className="card-footer">
                      <div className="card-footer-item">
                        <div className="location-logo">
                          <img
                            className="logo"
                            src="Images\location.svg"
                            alt=""
                          />
                        </div>
                        <span className="location-title">
                          NYC,United States
                        </span>
                      </div>
                      <div className="booking-logo">
                        <img src="Images\arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-container">
                <Slider {...settings} className="slider-slick" ref={sliderRef}>
                  <div className="slider-card">
                    <div className="slider-card-middle">
                      <div className="slider-card-background">
                        <div className="card-wrapper">
                          <div className="card-header">
                            <span className="card-info">Outdoor area</span>
                            <span className="more-info">
                              A Versatile platform <br /> Offering a wide range
                              of <br /> hotel options and services
                            </span>
                          </div>
                          <div className="card-footer">
                            <div className="card-footer-item">
                              <div className="location-logo">
                                <img
                                  className="logo"
                                  src="Images\location.svg"
                                  alt=""
                                />
                              </div>
                              <span className="location-title">
                                NYC,United States
                              </span>
                            </div>
                            <div className="booking-logo">
                              <img src="Images\arrow.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-card-footer">
                      <p className="slider-footer-text">
                        Explore the perfect destination for <br /> comfort,
                        relaxation, and luxury. Where <br /> hospitality meets
                        excellence in every <br />
                        stay
                      </p>
                      <div className="slider-buttons">
                        <button className="buttons" onClick={movetoPrev}>
                          <img src="Images\right-arrow.svg" alt="" />
                        </button>
                        <button className="buttons" onClick={movetoNext}>
                          <img src="Images\right-arrow.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="slider-card">
                    <div className="slider-card-middle">
                      <div className="slider-card-background">
                        <div className="card-wrapper">
                          <div className="card-header">
                            <span className="card-info">Outdoor area</span>
                            <span className="more-info">
                              Deluxe bedroom <br /> with quality service <br />{" "}
                              and amenities
                            </span>
                          </div>
                          <div className="card-footer">
                            <div className="card-footer-item">
                              <div className="location-logo">
                                <img
                                  className="logo"
                                  src="Images\location.svg"
                                  alt=""
                                />
                              </div>
                              <span className="location-title">
                                paris,France
                              </span>
                            </div>
                            <div className="booking-logo">
                              <img src="Images\arrow.svg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="slider-card-footer">
                      <p className="slider-footer-text">
                        Explore the perfect destination for <br /> comfort,
                        relaxation, and luxury. Where <br /> hospitality meets
                        excellence in every <br />
                        stay
                      </p>
                      <div className="slider-buttons">
                        <button className="buttons" onClick={movetoPrev}>
                          <img src="Images\right-arrow.svg" alt="" />
                        </button>
                        <button className="buttons" onClick={movetoNext}>
                          <img src="Images\right-arrow.svg" alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="middle-section">
        <div className="container">
          <div className="mid-start">
            <div className="left-section-content">
              <div className="sunlogo">
                <img src="Images\sunlight.svg" alt="" />
              </div>
              <div className="middle-info">
                {midData.map((item) => (
                  <div
                    key={item.id}
                    className={item.isActive ? "active-card" : "middle-card"}
                  >
                    <span className="middle-card-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="middle-content">
              <div className="left-section">
                <Slider
                  {...midsettings}
                  ref={midSlider}
                  className="middle-slider"
                >
                  <div className="slider-start">
                    <div className="midImage">
                      <img
                        src="Images\room2.png"
                        alt=""
                        className="midPic"
                      />
                    </div>
                    <div className="mid-info">
                      <span>Comfortable rooms with excellent Care</span>
                      <p>
                        On-site phamacies with quick delivery options even
                        Virtual consulations with top doctors
                      </p>
                      <div className="details">
                        <span>See Details</span>
                        <div className="booking-logo">
                          <img src="Images\arrow.svg" alt="" />
                        </div>
                      </div>
                      <div className="mid-slider-buttons">
                        <div className="slider-buttons">
                          <button
                            className="buttons"
                            onClick={() => {
                              midSlider.current.slickPrev();
                            }}
                          >
                            <img src="Images\right-arrow.svg" alt="" />
                          </button>
                          <button
                            className="buttons"
                            onClick={() => {
                              midSlider.current.slickNext();
                            }}
                          >
                            <img src="Images\right-arrow.svg" alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="slider-start">
                    <div>
                      <img
                        src="Images\hotel.png"
                        alt=""
                        className="midPic"
                      />
                    </div>
                    <div className="mid-info">
                      <h4>Comfortable rooms with excellent Care</h4>
                      <p>
                        On-site phamacies with quick delivery options even
                        Virtual consulations with top doctors
                      </p>
                      <div className="details">
                        <span>See Details</span>
                        <div className="booking-logo">
                          <img src="Images\arrow.svg" alt="" />
                        </div>
                      </div>
                      <div className="mid-slider-buttons">
                        <div className="slider-buttons">
                          <button
                            className="buttons"
                            onClick={() => {
                              midSlider.current.slickPrev();
                            }}
                          >
                            <img src="Images\right-arrow.svg" alt="" />
                          </button>
                          <button
                            className="buttons"
                            onClick={() => {
                              midSlider.current.slickNext();
                            }}
                          >
                            <img src="Images\right-arrow.svg" alt="" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
              <div className="right-section">
                <div className="right-header">
                  <span>
                    Discover Excellence <br />
                    in Hospitality. Trusted
                    <br />
                    Hotels You Can
                    <br />
                    Rely On
                  </span>
                </div>
                <div className="right-content">
                  <div className="image-right">
                    <img
                      src="Images\room3.jpg"
                      alt=""
                      className="rightPic"
                    />
                    <div className="plus-icon">
                      <p>+</p>
                    </div>
                  </div>
                  <div className="right-footer">
                    <img
                      src="Images\star.svg"
                      alt=""
                      className="right-footer-image"
                    />
                    <p className="right-footer-text">
                      Our top-tier medial facilities offer a <br />
                      comprehensive range of Services,
                      <br />
                      including advanced diagnotics,
                      <br />
                      specialized treatment, centers, and
                      <br />
                      24/7 emergency care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hotel-section">
        <div className="container">
          <div className="hotel-content">
            <div className="hotel-header">
              <div className="hotel-info">
                <span className="header-text">facilities</span>
                <h1>Explore Best Hotel</h1>
              </div>
              <div className="search-bar">
                <input
                  type="text"
                  className="search-more"
                  placeholder="Search Here.."
                />
                <img
                  src="Images\search.svg"
                  alt=""
                  className="search-icon"
                />
              </div>
            </div>
            <div className="hotel-slider-container">
              <Slider {...hotelsettings} ref={hotelSlider}>
                <div className="hotel-card">
                  <div className="cards-content">
                    <div className="hotel-card-image">
                      <img src="Images\hotel-img1.png" alt="" className="image-size"/>
                    </div>
                    <div className="card-logo">
                      <img src="Images\heart.svg" alt="" />
                    </div>
                    <div className="card-price">
                      <span className="hotel-price">$2500/Per Day</span>
                    </div>
                    <div className="hotel-card-footer">
                      <div>
                        <p className="footer-btn">Hotel In Dubai</p>
                        <p>Crystal View Hotel</p>
                      </div>
                      <div className="hotel-footer-logo">
                        <img src="Images\arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hotel-card">
                  <div className="cards-content">
                    <div className="hotel-card-image">
                      <img src="Images\hotel-img2.png" alt="" className="image-size"/>
                    </div>
                    <div className="card-logo">
                      <img src="Images\heart.svg" alt="" />
                    </div>
                    <div className="card-price">
                      <span className="hotel-price">$2500/Per Day</span>
                    </div>
                    <div className="hotel-card-footer">
                      <div>
                        <p className="footer-btn">Hotel In Dubai</p>
                        <p>Crystal View Hotel</p>
                      </div>
                      <div className="hotel-footer-logo">
                        <img src="Images\arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hotel-card">
                  <div className="cards-content">
                    <div className="hotel-card-image">
                      <img src="Images\hotel-img3.png" alt="" className="image-size"/>
                    </div>
                    <div className="card-logo">
                      <img src="Images\heart.svg" alt="" />
                    </div>
                    <div className="card-price">
                      <span className="hotel-price">$2500/Per Day</span>
                    </div>
                    <div className="hotel-card-footer">
                      <div>
                        <p className="footer-btn">Hotel In Dubai</p>
                        <p>Crystal View Hotel</p>
                      </div>
                      <div className="hotel-footer-logo">
                        <img src="Images\arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hotel-card">
                  <div className="cards-content">
                    <div className="hotel-card-image">
                      <img src="Images\hotel-img4.png" alt="" className="image-size"/>
                    </div>
                    <div className="card-logo">
                      <img src="Images\heart.svg" alt="" />
                    </div>
                    <div className="card-price">
                      <span className="hotel-price">$2500/Per Day</span>
                    </div>
                    <div className="hotel-card-footer">
                      <div>
                        <p className="footer-btn">Hotel In Dubai</p>
                        <p>Crystal View Hotel</p>
                      </div>
                      <div className="hotel-footer-logo">
                        <img src="Images\arrow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
              <div className="footer-content">
                <div className="slider-buttons">
                  <button
                    className="buttons"
                    onClick={() => {
                      hotelSlider.current.slickPrev();
                    }}
                  >
                    <img src="Images\right-arrow.svg" alt="" />
                  </button>
                  <button
                    className="buttons"
                    onClick={() => {
                      hotelSlider.current.slickNext();
                    }}
                  >
                    <img src="Images\right-arrow.svg" alt="" />
                  </button>
                </div>
                <p className="card-footer-info">
                  Book Your stay for Personalized Experiences <br />
                  Luxurious amenities, or a relaxing getaway, and <br />
                  take a step towards unforgettable memories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="discover-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-start">
              <p>Explore Hotel</p>
              <img src="Images\right-arrow.svg" alt="" />
            </div>
            <div className="hero-info">
              <h1>
                Discover top hotel Options nearby <br />
                Effortless hotel booking, tailored for you
              </h1>
              <h3 className="discover-title">
                Find the best Hotels around you with ease and access top-notch
                hotels <br />
                Services tailored to your needs{" "}
              </h3>
            </div>
            <div className="book-section">
              <span style={{ padding: "0 10px 0 10px", fontSize: "small" }}>
                Get Started
              </span>
              <div className="booking-logo">
                <img src="Images\arrow.svg" alt="" />
              </div>
            </div>
            <div className="discover-mid">
              <div className="img-cont1">
                <img src="Images\img1.png" className="disc-img" alt="" />
              </div>
              <div className="img-cont2">
                <img src="Images\img2.png" className="disc-img" alt="" />
              </div>
              <div className="img-cont3">
                <img src="Images\img3.png" className="disc-img" alt="" />
              </div>
              <div className="img-cont4">
                <div className="contact-card">
                  <p
                    style={{
                      fontSize: "12px",
                      textAlign: "center",
                      lineHeight: "1.6",
                    }}
                  >
                    Join Our Community Of <br />
                    Travelers and experience <br />
                    Unforgettable Stays
                  </p>
                  <div className="contact-card-info">
                    <p style={{ fontSize: "11px" }}>Support@Jetters.com</p>
                    <div className="booking-logo">
                      <img src="Images\arrow.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-cont5">
                <img src="Images\img4.png" className="disc-img" alt="" />
              </div>
              <div className="img-cont6">
                <img src="Images\img5.png" className="disc-img" alt="" />
              </div>
            </div>

            <div className="info">
              <h4 style={{ fontSize: "small", textAlign: "center" }}>
                With Our Dedication and expertise in Hotel, We Strive to <br />
                Provide stays that are not just accommodations, but a <br />
                Comforting journey toward relaxation and memorable <br />
                experiences
              </h4>
              <div className="info-profile">
                <img
                  src="Images\profile.png"
                  alt=""
                  className="profile-img"
                />
                <div className="profile-title">
                  <p style={{ fontWeight: "bold" }}>Anirban Pal</p>
                  <p>Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <div className="footer-back">
          <div className="container">
            <div className="company-title">
              <img src="Images\hotel.png" alt="" className="company-img"/>
              <span className="company">Jettrs-Contact</span>
              <div className="right-image">
                <img src="Images\hotel.png" alt="" className="company-img2"/>
              </div>
            </div>
            <div className="btm-footer">
              <div className="help">
                <p>Helpline: +1234567890</p>
              </div>
              <div>
                <div className="contact">
                  <div className="contact-item">
                    <p>About us</p>
                    <img src="Images\forward.svg" alt="" />
                  </div>
                  <div className="contact-item">
                    <p>FAQ</p>
                    <img src="Images\forward.svg" alt="" />
                  </div>
                  <p>Contact Us</p>
                </div>
                <p>
                  With Our dedication and expertise in hotel, We Strive to{" "}
                  <br />
                  Offer stays that go beyond just a room, Providing a <br />
                  Comforting journey toward relaxation and unforgettable <br />
                  Experiences
                </p>
                <div className="footer-img">
                  <img src="Images\fb.svg" alt="" className="img-border"/>
                  <img src="Images\insta.svg" alt="" className="img-border"/>
                  <img src="Images\twitter.svg" alt="" className="img-border"/>
                  <img src="Images\wp.svg" alt="" className="img-border"/>
                </div>
              </div>
              <div className="help">
                <p>
                  2025 Jettrs Health. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//slickPrev,slickNext ref.current.slickPrev()   ref.current.slickNext()
export default App;
