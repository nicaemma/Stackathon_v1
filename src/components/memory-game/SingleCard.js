import React from "react";
import "./SingleCard.css";

const SingleCard = (props) => {
  const { card, handleChoice, flipped, disabled } = props;

  const handleClick = (card) => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/images/memory-game/back-of-card2.png"
          onClick={() => {
            handleClick(card);
          }}
          alt="card back"
        />
      </div>
    </div>
  );
};

export default SingleCard;
