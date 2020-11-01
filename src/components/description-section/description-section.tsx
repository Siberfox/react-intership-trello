import React, { useState, useContext } from "react";

import { Modal, Button, FormControl, InputGroup } from "react-bootstrap";
import { MethodsContext } from "../../App";

import { PencilFill } from "react-bootstrap-icons";
import { TrashFill } from "react-bootstrap-icons";

import "./description-section.styles.scss";

interface DescriptionSectionProps {
  cardId: number;
  description: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  cardId,
  description,
}) => {
  const [newDescription, setNewDescription] = useState("");
  const [editDescription, setEditDescription] = useState(false);
  const methods = useContext(MethodsContext);

  const addDescription = () => {
    if (newDescription) {
      methods?.addNewDecription(cardId, newDescription);
      setNewDescription("");
    }
    setEditDescription(false);
  };

  const descriptionHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewDescription(e.target.value);
  };

  return (
    <Modal.Body className="card-options__body">
      <div className="description-title">
        <h3>Описание </h3>
        <div className="header__icons">
          <PencilFill
            className="icon-edit"
            size={17}
            onClick={() => setEditDescription(true)}
          />
          <TrashFill
            className="icon-delete"
            size={17}
            onClick={() => methods?.deleteDescription(cardId)}
          />
        </div>
      </div>

      {description && !editDescription ? (
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
            value={newDescription}
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
