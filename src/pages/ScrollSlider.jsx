import { useEffect, useState, useRef } from "react";
import "../css/scrollslider.css";

const cards = [
  { id: 1, title: "Design", color: "#FF6B6B" },
  { id: 2, title: "Develop", color: "#4ECDC4" },
  { id: 3, title: "Deploy", color: "#1A535C" },
];

export default function ScrollSlider() {
  const [cardStates, setCardStates] = useState({});
  const wrapperRef = useRef(null);
  const cardRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
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
              <button>
                <span>More services</span>
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
                      background: card.color,
                      zIndex: cards.length - card.id,
                      width: "100%",
                      opacity: 1,
                      transform: `translateX(${state.translateX}%)`,
                    }}
                  >
                    <h1>{card.title}</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
