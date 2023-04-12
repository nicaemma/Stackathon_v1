import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MemApp.css";
import SingleCard from "./SingleCard";

const cardImages = [
  { src: "/images/memory-game/pink-flowers.png", matched: false },
  {
    src: "/images/memory-game/tree-sky.png",
    matched: false,
  },
  { src: "/images/memory-game/zen-stones-in-water.png", matched: false },
  { src: "/images/memory-game/moon-reflection2.png", matched: false },
  { src: "/images/memory-game/meditation-sillhouette.png", matched: false },
  { src: "/images/memory-game/winter-city.png", matched: false },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // shuffle cards --> runs at the start to initialize game.
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    // Map above: ...card --> each card's properties (src), id --> add this property to each card

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        // Return --> spread card properties with matched property changed to 'true'.
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        // Wait 1000ms (1sec) and then call resetTurn()
        setTimeout(() => resetTurn(), 1300);
      }
    }
  }, [choiceOne, choiceTwo]);

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };
  // Above: if choiceOne is true, we setChoiceTwo

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // start new game right away
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="Mem-page">
      <div className="Mem-game">
        <h1>Memory Game</h1>
        <Button variant="secondary" onClick={shuffleCards}>
          New Game
        </Button>
        <div className="card-grid">
          {cards.map((card) => (
            <SingleCard
              handleChoice={handleChoice}
              card={card}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
              key={card.id}
            />
          ))}
        </div>
        <p>Turns: {turns}</p>
      </div>
    </div>
  );
}

export default MemoryGame;
