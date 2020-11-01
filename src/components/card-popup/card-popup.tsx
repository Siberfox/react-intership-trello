import React from "react";

import { Modal } from "react-bootstrap";

import CommentsSection from "../comments-section/comments-section";
import DescriptionSection from "../description-section/description-section";
import CardTitleSection from "../card-title-section/card-title-section";

import "./card-popup.styles.scss";

interface CardPopupProps {
  username: string;
  cardName: string;
  cardId: number;
  description: string;
  columnName: string;
  isShow: boolean;
  onHide: () => void;
  comments: {
    id: number;
    cardId: number;
    name: string;
    text: string;
  }[];
}

const CardPopup: React.FC<CardPopupProps> = ({
  cardName,
  isShow,
  onHide,
  description,
  columnName,
  cardId,
  username,
  comments,
}) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
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
        />
        <DescriptionSection description={description} cardId={cardId} />
        <CommentsSection
          cardId={cardId}
          username={username}
          comments={comments}
        />
      </Modal>
    </div>
  );
};

export default CardPopup;
