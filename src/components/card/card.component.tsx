import React, { useState } from "react";

import Comments from "../../assets/comments.svg";
import CardOptions from "../card-options/card-options.component";

import "./card.styles.scss";

interface CardProps {
  name: string;
  cardId: string;
  boardName: string;
  boardId: string;
  description: string;
  comments: { name: string; text: string; id: string }[];
  addNewComment: (boardId: string, cardId: string, value: string) => void;
}

const Card: React.FC<CardProps> = ({
  name,
  comments,
  description,
  boardName,
  cardId,
  boardId,
  addNewComment,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="card__wrapper" onClick={handleShow}>
      <p>{name}</p>

      {comments.length ? (
        <div className="comments-icon">
          <img src={Comments} alt="comments" />
          <p className="comments-icon__text">{comments.length}</p>
        </div>
      ) : (
        ""
      )}
      <CardOptions
        name={name}
        boardName={boardName}
        show={show}
        onHide={handleClose}
        description={description}
        comments={comments}
        boardId={boardId}
        cardId={cardId}
        addNewComment={addNewComment}
      />
    </div>
  );
};

export default Card;
