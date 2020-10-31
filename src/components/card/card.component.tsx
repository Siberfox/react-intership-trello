import React, { useState } from "react";

import Comments from "../../assets/comments.svg";
import CardOptions from "../card-options/card-options.component";

import "./card.styles.scss";

interface CardProps {
  username: string;
  cardName: string;
  cardId: string;
  columnName: string;
  columnId: string;
  description: string;
  comments: { name: string; text: string; id: string }[];
}

const Card: React.FC<CardProps> = ({
  cardName,
  comments,
  description,
  columnName,
  cardId,
  columnId,
  username,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card__wrapper" onClick={handleShow}>
      <p>{cardName}</p>

      {comments.length ? (
        <div className="comments-icon">
          <img src={Comments} alt="comments" />
          <p className="comments-icon__text">{comments.length}</p>
        </div>
      ) : (
        ""
      )}
      <CardOptions
        cardName={cardName}
        columnName={columnName}
        show={show}
        onHide={handleClose}
        description={description}
        comments={comments}
        columnId={columnId}
        cardId={cardId}
        username={username}
      />
    </div>
  );
};

export default Card;
