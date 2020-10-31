import React, { useState, useContext } from "react";

import { Modal, FormControl, InputGroup, Button } from "react-bootstrap";
import { MethodsContext } from "../../App";

import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";

import "./card-title-sectin.styles.scss";

interface CardTitleSectionProps {
  cardName: string;
  cardId: string;
  columnId: string;
  columnName: string;
  username: string;
}

const CardTitleSection: React.FC<CardTitleSectionProps> = ({
  cardName,
  cardId,
  columnId,
  columnName,
  username,
}) => {
  const [inputNewCardName, setInputNewCardName] = useState("");
  const [editCardNameInput, setEditCardNameInput] = useState(false);
  const methods = useContext(MethodsContext);

  const addDescription = () => {
    if (inputNewCardName) {
      methods?.editCardName(columnId, cardId, inputNewCardName);
      setInputNewCardName("");
    }
    setEditCardNameInput(false);
  };

  const cardNameHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputNewCardName(e.target.value);
  };

  return (
    <Modal.Header closeButton>
      <Modal.Title
        id="contained-modal-title-vcenter"
        className="header__container"
      >
        {editCardNameInput ? (
          <InputGroup className="mb-3">
            <FormControl
              id="basic-url"
              placeholder="Изменить название..."
              aria-label="Изменить название..."
              aria-describedby="basic-addon2"
              onChange={cardNameHandleChange}
              value={inputNewCardName}
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
                onClick={() => setEditCardNameInput(true)}
              />
              <TrashFill
                className="icon-delete"
                size={20}
                onClick={() => {
                  methods?.deleteCard(columnId, cardId);
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
