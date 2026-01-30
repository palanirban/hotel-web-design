import { useEffect, useState, useRef } from "react";
import "../css/scrollslider.css";

const cards = [
  { id: 1, title: "Design", color: "#FF6B6B" },
  { id: 2, title: "Develop", color: "#4ECDC4" },
  { id: 3, title: "Deploy", color: "#1A535C" },
];

export default function ScrollSlider() {
  const [cardStates, setCardStates] = useState({});
  const [scrollPercent, setScrollPercent] = useState(0);
  const wrapperRef = useRef(null);
  const cardRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll percentage
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const percent =
        scrollHeight > 0 ? Math.round((scrolled / scrollHeight) * 100) : 0;
      setScrollPercent(percent);

      const newCardStates = {};
      // Dynamic scroll per card based on number of cards
      const totalScrollDistance = 2000; // Total scroll distance for all cards
      const scrollPerCard = totalScrollDistance / cards.length;

      cards.forEach((card, index) => {
        if (cardRefs.current[card.id]) {
          const cardElement = cardRefs.current[card.id];
          const cardRect = cardElement.getBoundingClientRect();
          const viewportHeight = window.innerHeight;

          // Position where card should start animating (bottom of viewport)
          const cardStartPosition = viewportHeight;

          // Current position of card top in viewport
          const cardTopPosition = cardRect.top;

          // Calculate how much the card has scrolled into view
          const scrollDistance = cardStartPosition - cardTopPosition;

          // Calculate progress (0 = not started, 1 = fully revealed)
          let cardProgress = scrollDistance / scrollPerCard;

          // Clamp between 0 and 1
          const clampedProgress = Math.max(0, Math.min(1, cardProgress));

          // Calculate translateX: starts at 50, ends at 0
          const translateX = 50 - clampedProgress * 50;

          newCardStates[card.id] = {
            translateX,
          };
        }
      });

      setCardStates(newCardStates);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const handleScrollButtonClick = () => {
  //   // Scroll to the next 10% of the page
  //   const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  //   const nextScroll = window.scrollY + scrollHeight * 0.1;
  //   window.scrollTo({ top: nextScroll, behavior: "smooth" });
  // };

  const handleScrollButtonClick = (e) => {
    // Right click to scroll to top
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="dummy">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus laborum velit odio maiores incidunt aperiam unde illum
          fuga sed tempora natus, neque harum dolore? Explicabo reiciendis
          maiores nobis cum. Sequi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim eius
          facilis porro perferendis quisquam numquam amet, incidunt nostrum
          officiis ut nobis atque. Labore accusamus molestiae omnis eos,
          distinctio tenetur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim eius
          facilis porro perferendis quisquam numquam amet, incidunt nostrum
          officiis ut nobis atque. Labore accusamus molestiae omnis eos,
          distinctio tenetur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim eius
          facilis porro perferendis quisquam numquam amet, incidunt nostrum
          officiis ut nobis atque. Labore accusamus molestiae omnis eos,
          distinctio tenetur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim eius
          facilis porro perferendis quisquam numquam amet, incidunt nostrum
          officiis ut nobis atque. Labore accusamus molestiae omnis eos,
          distinctio tenetur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim eius
          facilis porro perferendis quisquam numquam amet, incidunt nostrum
          officiis ut nobis atque. Labore accusamus molestiae omnis eos,
          distinctio tenetur!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex enim eius
          facilis porro perferendis quisquam numquam amet, incidunt nostrum
          officiis ut nobis atque. Labore accusamus molestiae omnis eos,
          distinctio tenetur!
        </p>
      </div>
      <div className="s-slide-start">
        <div className="container">
          <div className="s-items">
            <div className="s-left">
              <p>Our Solutions</p>
              <h2>Tailored Business Solutions for our Corporates.</h2>
              <button className="more-btn">
                <span className="more-title">More services</span>
                <div className="more-logo">
                  <img src="Images\arrow.svg" alt="" className="more-img" />
                </div>
              </button>
            </div>
            <div className="stack-wrapper" ref={wrapperRef}>
              {cards.map((card) => {
                const state = cardStates[card.id] || {
                  translateX: 50,
                };

                return (
                  <div
                    key={card.id}
                    ref={(el) => (cardRefs.current[card.id] = el)}
                    className="card stack-card"
                    style={{
                      // background: card.color,
                      zIndex: cards.length - card.id,
                      width: "100%",
                      opacity: 1,
                      transform: `translateX(${state.translateX}%)`,
                    }}
                  >
                    <div className="slider-left">
                      <div className="s-slider-img">
                        <img src="Images\google.svg" alt="" className="s-img" />
                      </div>
                      <p>Business Strategy Development</p>
                    </div>
                    <h1>{card.title}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {scrollPercent > 0 && (
        <div className="scroll-percent">
          <button
            className="scroll-btn"
            onClick={handleScrollButtonClick}
            // onContextMenu={handleScrollButtonRightClick}
            title="Click to scroll down 10% | Right-click to scroll to top"
            style={{
              background: `conic-gradient(rgba(2, 59, 47, 0.8) 0deg ${scrollPercent * 3.6}deg, #e0e0e0 ${scrollPercent * 3.6}deg 360deg)`,
              padding: "1.5px",
            }}
          >
            <div className="scroll-btn-inner">
              {scrollPercent < 95 ? (
                <p>{scrollPercent}%</p>
              ) : (
                <img src="Images\up-arrow.svg" alt="" className="up-img"/>
              )}
            </div>
          </button>
        </div>
      )}
    </>
  );
}
