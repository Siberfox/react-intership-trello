import React, { useState } from "react";

import Comments from "../../assets/comments.svg";
import CardPopup from "../card-popup/card-popup";

import "./card.styles.scss";

interface CardProps {
  username: string;
  columnName: string;
  card: {
    name: string;
    id: number;
    columnId: number;
    description: string;
    author: string;
    comments: number;
  };
  comments: {
    id: number;
    cardId: number;
    name: string;
    text: string;
  }[];
}

const Card: React.FC<CardProps> = ({
  card,
  username,
  columnName,
  comments,
}) => {
  const [isShow, setIsShow] = useState(false);

  const handleClose = () => setIsShow(false);
  const handleShow = () => setIsShow(true);

  return (
    <div className="card__wrapper" onClick={handleShow}>
      <p>{card.name}</p>

      {card.comments ? (
        <div className="comments-icon">
          <img src={Comments} alt="comments" />
          <p className="comments-icon__text">{card.comments}</p>
        </div>
      ) : (
        ""
      )}
      <CardPopup
        cardName={card.name}
        columnName={columnName}
        isShow={isShow}
        onHide={handleClose}
        description={card.description}
        cardId={card.id}
        username={username}
        comments={comments}
        author={card.author}
      />
    </div>
  );
};

export default Card;
