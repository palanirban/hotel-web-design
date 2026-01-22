import { useState } from "react";
import "../css/dashboard.css";

export default function Dashboard() {
  const headData = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "Video",
    },
    {
      id: 3,
      title: "Branding",
    },
    {
      id: 4,
      title: "Graphic",
    },
    {
      id: 5,
      title: "Web",
    },
    {
      id: 6,
      title: "Package",
    },
  ];

  const [activeCard, setactiveCard] = useState("All");

  const scrollSection = () => {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="dash-nav">
        <div className="dash-logo">
          <img src="Images\footer-bg.png" alt="" className="logo-img" />
        </div>
        <div className="dash-content">
          <p onClick={scrollSection}>HOME</p>
          <p
            onClick={() => {
              document
                .getElementById("project")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            SERVICE
          </p>
          <p
            onClick={() => {
              document
                .getElementById("works")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            WORKS
          </p>
          <p onClick={() => {
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" });
            }}>ABOUT US</p>
          {/* <p onClick={() => {
              document
                .getElementById("blog")
                .scrollIntoView({ behavior: "smooth" });
            }}>BLOG</p> */}
          <p>CLIENTS</p>
          <p onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" });
            }}>CONTACT</p>
          <img src="Images\search-w.svg" alt="" />
        </div>
      </nav>

      <div className="dash-main" id="home">
        <img src="Images\bg-img.jpg" alt="" className="logo-img" />
      </div>

      <div className="project" id="project">
        <div className="o-heading">
          <p>SERVICES</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molestias
            ab blanditiis <br /> cumque quaerat neque reprehenderit quisquam
          </p>
        </div>
        <div className="o-grid">
          <div className="o-contain">
            <div>
              <img src="Images\wand.svg" alt="" />
            </div>
            <span className="p-head">Unlimited Colors</span>
            <p className="p-subhead">
              Praesent faucibus nisl sit nulla <br /> sollicitudin a sed purus.
            </p>
          </div>
          <div className="o-contain">
            <div>
              <img src="Images\wand.svg" alt="" />
            </div>
            <span className="p-head">Theme Options</span>
            <p className="p-subhead">
              voluptatem accusantium.Sed ut
              <br /> perspiciatis unde omnis
            </p>
          </div>
          <div className="o-contain">
            <div>
              <img src="Images\wand.svg" alt="" />
            </div>
            <span className="p-head">SEO Friendly</span>
            <p className="p-subhead">
              Swine porchetta shank hamburger <br /> beef ribs turducken ground
            </p>
          </div>
          <div className="o-contain">
            <div>
              <img src="Images\wand.svg" alt="" />
            </div>
            <span className="p-head">Creative Design</span>
            <p className="p-subhead">
              Ground round fatback ribeye tail <br /> shank pork chop
            </p>
          </div>
        </div>
      </div>

      <div className="works" id="works">
        <div className="o-heading">
          <p>Recent Works</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molestias
            ab blanditiis <br /> cumque quaerat neque reprehenderit quisquam
          </p>
        </div>
        <div className="work-content">
          <div className="work-head">
            {headData.map((item) => (
              <p
                onClick={() => setactiveCard(item.title)}
                key={item.id}
                className={
                  activeCard === item.title ? "head-tiltle" : "regular"
                }
              >
                {item.title}
              </p>
            ))}
          </div>

          <div className="work-grid">
            <img src="Images\mid-img1.jpg" alt="" className="grid-img" />
            <img src="Images\mid-img2.jpg" alt="" className="grid-img" />
            <img src="Images\mid-img3.jpg" alt="" className="grid-img" />
            <img src="Images\mid-img4.jpg" alt="" className="grid-img" />
            <img src="Images\mid-img4.jpg" alt="" className="grid-img" />
            <img src="Images\mid-img3.jpg" alt="" className="grid-img" />
            <img src="Images\mid-img2.jpg" alt="" className="grid-img" />
            <img src="Images\mid-img1.jpg" alt="" className="grid-img" />
          </div>
        </div>
      </div>

      <div className="a-info" id="about">
        <div className="o-heading">
          <p>ABOUT US</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molestias
            ab blanditiis <br /> cumque quaerat neque reprehenderit quisquam
          </p>
        </div>

        <div className="a-grid">
          <div className="a-contain">
            <span className="p-head">Our Vision</span>
            <p className="p-subhead">
              His sumo verear torquatos et. Ad sint eripuit <br /> tractatos
              sit. Affert dissentiet nec ut. Eos no
              <br /> autem dolorem facilisi. Eu unum mucius
              <br /> scripserit qui. Ipsum omnes voluptaria est id
            </p>
          </div>
          <div className="a-contain">
            <span className="p-head">Our Vision</span>
            <p className="p-subhead">
              His sumo verear torquatos et. Ad sint eripuit <br /> tractatos
              sit. Affert dissentiet nec ut. Eos no
              <br /> autem dolorem facilisi. Eu unum mucius
              <br /> scripserit qui. Ipsum omnes voluptaria est id
            </p>
          </div>
          <div className="a-contain">
            <span className="p-head">Our Vision</span>
            <p className="p-subhead">
              His sumo verear torquatos et. Ad sint eripuit <br /> tractatos
              sit. Affert dissentiet nec ut. Eos no
              <br /> autem dolorem facilisi. Eu unum mucius
              <br /> scripserit qui. Ipsum omnes voluptaria est id
            </p>
          </div>
        </div>

        <div className="a-info">
          <p className="t-title">Meet Our Team</p>
          <div className="team-grid">
            <img src="Images\member1.jpg" alt="" className="team-img" />
            <img src="Images\member2.jpg" alt="" className="team-img" />
            <img src="Images\member1.jpg" alt="" className="team-img" />
            <img src="Images\member2.jpg" alt="" className="team-img" />
          </div>
        </div>
      </div>

      {/* <div className="blog" id="blog">
        <div className="o-heading">
          <p>BLOG</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molestias
            ab blanditiis <br /> cumque quaerat neque reprehenderit quisquam
          </p>
        </div>

        <div className="blog-grid">
          <div className="blog-contain">
            <div className="blog-left">
              <img src="Images\post1.jpg" alt="" className="blog-img" />
              <div className="b-date">
                <span className="date-head">24</span>
                <span className="date-subhead">April</span>
              </div>
            </div>
            <div className="blog-info">
              <div className="blog-head">
                <p>
                  Standard post with
                  <br /> preview picture
                </p>
              </div>
              <div className="blog-subhead">
                <p> Posted By: Admin</p>
              </div>
              <div className="blog-subhead">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
              <div className="read-btn">
                <span>Read More</span>
              </div>
            </div>
          </div>
          <div className="blog-contain">
            <div className="blog-left">
              <img src="Images\post1.jpg" alt="" className="blog-img" />
              <div className="b-date">
                <span className="date-head">24</span>
                <span className="date-subhead">April</span>
              </div>
            </div>
            <div className="blog-info">
              <div className="blog-head">
                <p>
                  Standard post with
                  <br /> preview picture
                </p>
              </div>
              <div className="blog-subhead">
                <p> Posted By: Admin</p>
              </div>
              <div className="blog-subhead">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
              <div className="read-btn">
                <span>Read More</span>
              </div>
            </div>
          </div>
          <div className="blog-contain">
            <div className="blog-left">
              <img src="Images\post1.jpg" alt="" className="blog-img" />
              <div className="b-date">
                <span className="date-head">24</span>
                <span className="date-subhead">April</span>
              </div>
            </div>
            <div className="blog-info">
              <div className="blog-head">
                <p>
                  Standard post with
                  <br /> preview picture
                </p>
              </div>
              <div className="blog-subhead">
                <p> Posted By: Admin</p>
              </div>
              <div className="blog-subhead">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
              <div className="read-btn">
                <span>Read More</span>
              </div>
            </div>
          </div>
          <div className="blog-contain">
            <div className="blog-left">
              <img src="Images\post1.jpg" alt="" className="blog-img" />
              <div className="b-date">
                <span className="date-head">24</span>
                <span className="date-subhead">April</span>
              </div>
            </div>
            <div className="blog-info">
              <div className="blog-head">
                <p>
                  Standard post with
                  <br /> preview picture
                </p>
              </div>
              <div className="blog-subhead">
                <p> Posted By: Admin</p>
              </div>
              <div className="blog-subhead">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
              <div className="read-btn">
                <span>Read More</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="contact" id="contact">
        <div className="o-heading">
          <p>CONTACT US</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molestias
            ab blanditiis <br /> cumque quaerat neque reprehenderit quisquam
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-contain">
            <p className="contact-title">Visit Our Office</p>
            <div className="contact-div">
              <div className="contact-info">
                <img src="Images\location-red.svg" alt="" />
                <span>Adress: 1234 Street Name, City Name</span>
              </div>
              <div className="contact-info">
                <img src="Images\call.svg" alt="" />
                <span>Phone: (123) 456-7890</span>
              </div>
              <div className="contact-info">
                <img src="Images\mail.svg" alt="" />
                <span> Email: tea@doors.com</span>
              </div>
            </div>
          </div>
          <div className="contact-contain">
            <p className="contact-title">Business Hours</p>
            <div className="contact-div">
              <div className="contact-info">
                <img src="Images\time.svg" alt="" />
                <span>Mon. - Fri. 8am to 5pm</span>
              </div>
              <div className="contact-info">
                <img src="Images\time.svg" alt="" />
                <span>Sat. 8am to 11am</span>
              </div>
              <div className="contact-info">
                <img src="Images\time.svg" alt="" />
                <span> Sun. Closed</span>
              </div>
            </div>
          </div>
          <div className="contact-contain">
            <p className="contact-title">Visit Our Office</p>
            <div className="contact-div">
              <div className="contact-field">
                <input
                  type="text"
                  placeholder="Name"
                />
                <input type="text" placeholder="Email Id" />
              </div>
              <textarea name="" id="" placeholder="Your text" className="area-size"></textarea>
              <div className="contact-submit">
                <span>SUBMIT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dash-footer">
        <div className="footer-grid">
          <div className="foot-img-contain">
            <img src="Images\footer-bg.png" alt="" className="foot-img"/>
          </div>
          <div className="foot-info">
            <span className="foot-info-head">Menu</span>
            <div className="foot-info-subhead">
              <p>About Us</p>
              <p>Blog</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="foot-info">
            <span className="foot-info-head">Contact Info</span>
            <div className="foot-info-subhead">
              <p>info@usharajinfotech.com</p>
              <p>
                101 , Chandraghanta I-2/22 Keshavpuram , Awas Vikas No 1,
                Kalyanpur, Kanpur - Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
