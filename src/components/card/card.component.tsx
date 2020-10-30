import React, { useState } from "react";

import Comments from "../../assets/comments.svg";
import CardOptions from "../card-options/card-options.component";

import "./card.styles.scss";

interface CardProps {
  name: string;
  description: string;
  comments: { name: string; text: string; id: string }[];
}

const Card: React.FC<CardProps> = ({ name, comments, description }) => {
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
        show={show}
        onHide={handleClose}
        description={description}
        comments={comments}
      />
    </div>
  );
};

export default Card;
