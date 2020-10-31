import React from "react";

import { Modal } from "react-bootstrap";

import CommentsSection from "../comments-section/comments-section.component";
import DescriptionSection from "../description-section/description-section.component";
import CardTitleSection from "../card-title-section/card-title-section.component";

import "./card-options.styles.scss";

interface CardOptionsProps {
  username: string;
  cardName: string;
  cardId: string;
  columnId: string;
  description: string;
  columnName: string;
  comments: { name: string; text: string; id: string }[];
  show: boolean;
  onHide: () => void;
}

const CardOptions: React.FC<CardOptionsProps> = ({
  cardName,
  show,
  onHide,
  description,
  columnName,
  comments,
  cardId,
  columnId,
  username,
}) => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
      >
        <CardTitleSection
          cardId={cardId}
          columnId={columnId}
          cardName={cardName}
          columnName={columnName}
          username={username}
        />
        <DescriptionSection
          description={description}
          cardId={cardId}
          columnId={columnId}
        />
        <CommentsSection
          comments={comments}
          cardId={cardId}
          columnId={columnId}
          username={username}
        />
      </Modal>
    </div>
  );
};

export default CardOptions;
