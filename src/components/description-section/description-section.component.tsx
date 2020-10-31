import React, { useState, useContext } from "react";

import { Modal, Button, FormControl, InputGroup } from "react-bootstrap";
import { MethodsContext } from "../../App";

import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";

import "./description-section.styles.scss";

interface DescriptionSectionProps {
  cardId: string;
  columnId: string;
  description: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  cardId,
  columnId,
  description,
}) => {
  const [inputNewDescription, setInputNewDescription] = useState("");
  const [editDescriptionInput, setEditDescriptionInput] = useState(false);
  const methods = useContext(MethodsContext);

  const addDescription = () => {
    if (inputNewDescription) {
      methods?.addNewDecription(columnId, cardId, inputNewDescription);
      setInputNewDescription("");
    }
    setEditDescriptionInput(false);
  };

  const descriptionHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputNewDescription(e.target.value);
  };

  return (
    <Modal.Body className="card-options__body">
      <div className="description-title">
        <h3>Описание </h3>
        <div className="header__icons">
          <PencilFill
            className="icon-edit"
            size={17}
            onClick={() => setEditDescriptionInput(true)}
          />
          <TrashFill
            className="icon-delete"
            size={17}
            onClick={() => methods?.deleteDescription(columnId, cardId)}
          />
        </div>
      </div>

      {description && !editDescriptionInput ? (
        <>
          <p>{description}</p>
        </>
      ) : (
        <InputGroup className="mb-3">
          <FormControl
            id="basic-url"
            placeholder="Добавить описание..."
            aria-label="Добавить описание..."
            aria-describedby="basic-addon2"
            onChange={descriptionHandleChange}
            value={inputNewDescription}
          />
          <InputGroup.Append>
            <Button variant="outline-success" onClick={addDescription}>
              Сохранить
            </Button>
          </InputGroup.Append>
        </InputGroup>
      )}
    </Modal.Body>
  );
};

export default DescriptionSection;
