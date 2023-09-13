import React from "react";
import "./Card.scss";
const Card = (props) => {
  const {card} = props
  return (
    <>
      <li className="card-item">
        {card.image &&
          <img className="card-cover" src={card.image}/>
          
        }
        {card.title}
        Desing & Reaserch
      </li>
    </>
  );
};

export default Card;
