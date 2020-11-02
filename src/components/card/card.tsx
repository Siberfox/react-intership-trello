import React, { useState, useContext } from 'react';

import Comments from '../../assets/comments.svg';
import CardPopup from '../card-popup/card-popup';

import { StoreContext } from '../../store-context';

import './card.styles.scss';

interface CardProps {
  username: string;
  columnName: string;
  card: {
    name: string;
    id: number;
    columnId: number;
    description: string;
    author: string;
  };
}

const Card: React.FC<CardProps> = ({ card, username, columnName }) => {
  const [isShow, setIsShow] = useState(false);

  const store = useContext(StoreContext);
  const comments = store?.comments?.filter(
    (item) => item.cardId === card.id,
  );

  const handleClose = () => setIsShow(false);
  const handleShow = () => setIsShow(true);

  return (
    <div className="card__wrapper" onClick={handleShow} onKeyPress={(e) => {if (e.key === 'Enter'){handleShow();}}} role="button" tabIndex={0}>
      <p>{card.name}</p>

      {comments?.length ? (
        <div className="comments-icon">
          <img src={Comments} alt="comments" />
          <p className="comments-icon__text">{comments?.length}</p>
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
        username={username}
        author={card.author}
      />
    </div>
  );
};

export default Card;
