import React from 'react';

import { Modal } from 'react-bootstrap';

import CommentsSection from '../comments-section/comments-section';
import DescriptionSection from '../description-section/description-section';
import CardTitleSection from '../card-title-section/card-title-section';

import './card-popup.styles.scss';

interface CardPopupProps {
  cardName: string;
  cardId: number;
  author: string;
  description: string;
  columnName: string;
  isShow: boolean;
  onHide: () => void;
}

const CardPopup: React.FC<CardPopupProps> = ({
  cardName,
  isShow,
  onHide,
  description,
  columnName,
  cardId,
  author,
}) => {
  return (
    <div onClick={(e) => e.stopPropagation()} role='button' onKeyPress={(e) => {if (e.key === 'Enter'){e.stopPropagation();}}} tabIndex={0}>
      <Modal
        show={isShow}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <CardTitleSection
          cardId={cardId}
          cardName={cardName}
          columnName={columnName}
          author={author}
        />
        <DescriptionSection description={description} cardId={cardId} />
        <CommentsSection cardId={cardId} />
      </Modal>
    </div>
  );
};

export default CardPopup;
