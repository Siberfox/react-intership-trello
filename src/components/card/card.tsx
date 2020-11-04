import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/root-reducer';

import Comments from '../../assets/comments.svg';
import CardPopup from '../card-popup/card-popup';

import './card.styles.scss';

interface CardProps {
  columnName: string;
  card: {
    name: string;
    id: number;
    columnId: number;
    description: string;
    author: string;
  };
}

const Card: React.FC<CardProps> = ({ card, columnName }) => {
  const [isShow, setIsShow] = useState(false);

  const comments = useSelector((state: RootState) =>
    state.comments.filter((item) => item.cardId === card.id),
  );

  const handleClose = () => setIsShow(false);
  const handleShow = () => setIsShow(true);

  return (
    <div
      className="card__wrapper"
      onClick={handleShow}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          handleShow();
        }
      }}
      role="button"
      tabIndex={0}
    >
      <p>{card.name}</p>

      {comments?.length ? (
        <div className="comments-icon">
          <img src={Comments} alt="comments" />
          <p className="comments-icon__text">{comments.length}</p>
        </div>
      ) : (
        ''
      )}
      <CardPopup
        cardName={card.name}
        columnName={columnName}
        isShow={isShow}
        onHide={handleClose}
        description={card.description}
        cardId={card.id}
        author={card.author}
      />
    </div>
  );
};

export default Card;
