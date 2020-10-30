import React, { useState } from "react";

import Comments from "../../assets/comments.svg";

import "./card.styles.scss";

const Card: React.FC<{ name: string; comments: any[] }> = ({
  name,
  comments,
}) => {
  return (
    <div className="card__wrapper">
      <p>{name}</p>

      {comments.length ? (
        <div className="comments-icon">
          <img src={Comments} alt="comments" />
          <p className="comments-icon__text">{comments.length}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Card;
