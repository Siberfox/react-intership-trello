import React, { useState, useContext } from "react";

import { Modal, FormControl, InputGroup, Button } from "react-bootstrap";
import { MethodsContext } from "../../App";

import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";

import "./card-title-sectin.styles.scss";

interface CardTitleSectionProps {
  cardName: string;
  cardId: number;
  columnName: string;
}

const CardTitleSection: React.FC<CardTitleSectionProps> = ({
  cardName,
  cardId,
  columnName,
}) => {
  const [newCardName, setNewCardName] = useState("");
  const [editCardName, setEditCardName] = useState(false);
  const methods = useContext(MethodsContext);

  const addDescription = () => {
    if (newCardName) {
      methods?.editCardName(cardId, newCardName);
      setNewCardName("");
    }
    setEditCardName(false);
  };

  const cardNameHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewCardName(e.target.value);
  };

  return (
    <Modal.Header closeButton>
      <Modal.Title
        id="contained-modal-title-vcenter"
        className="header__container"
      >
        {editCardName ? (
          <InputGroup className="mb-3">
            <FormControl
              id="basic-url"
              placeholder="Изменить название..."
              aria-label="Изменить название..."
              aria-describedby="basic-addon2"
              onChange={cardNameHandleChange}
              value={newCardName}
            />
            <InputGroup.Append>
              <Button variant="outline-success" onClick={addDescription}>
                Сохранить
              </Button>
            </InputGroup.Append>
          </InputGroup>
        ) : (
          <>
            <p>
              {columnName} &gt; {cardName}
            </p>
            <div className="header__icons">
              <PencilFill
                className="icon-edit"
                size={20}
                onClick={() => setEditCardName(true)}
              />
              <TrashFill
                className="icon-delete"
                size={20}
                onClick={() => {
                  methods?.deleteCard(cardId);
                }}
              />
            </div>
          </>
        )}
      </Modal.Title>
    </Modal.Header>
  );
};

export default CardTitleSection;
