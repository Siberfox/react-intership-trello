import React, { useState, useContext } from "react";

import { Modal } from "react-bootstrap";
import { MethodsContext } from "../../App";

import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";

import "./card-title-sectin.styles.scss";

interface CardTitleSectionProps {
  cardName: string;
  cardId: string;
  columnId: string;
  columnName: string;
}

const CardTitleSection: React.FC<CardTitleSectionProps> = ({
  cardName,
  cardId,
  columnId,
  columnName,
}) => {
  return (
    <Modal.Header closeButton>
      <Modal.Title
        id="contained-modal-title-vcenter"
        className="header__container"
      >
        <p>
          {columnName} &gt; {cardName}
        </p>
        <div className="header__icons">
          <PencilFill className="icon-edit" size={20} />
          <TrashFill className="icon-delete" size={20} />
        </div>
      </Modal.Title>
    </Modal.Header>
  );
};

export default CardTitleSection;
