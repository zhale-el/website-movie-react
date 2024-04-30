import React, { useEffect, useRef } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {
  const cardsRef = useRef();

  const handlerWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handlerWheel);
  }, []);
  return (
    <div className="titlecards">
      <h2 className="titlecards__title">
        {title ? title : "Popular on Netflix"}
      </h2>

      <div className="titlecards__list" ref={cardsRef}>
        {cards_data.map((card) => (
          <div className="titlecards-card" key={card.id}>
            <img
              src={card.image}
              alt="card image"
              className="titlecards-card__image"
            />
            <p className="titlecards-card__name">{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
