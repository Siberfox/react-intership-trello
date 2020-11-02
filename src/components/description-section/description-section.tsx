import React, { useState, useContext } from 'react';

import { Modal, Button, FormControl, InputGroup } from 'react-bootstrap';

import { PencilFill, TrashFill } from 'react-bootstrap-icons';

import { StoreContext } from '../../store-context';

import './description-section.styles.scss';

interface DescriptionSectionProps {
  cardId: number;
  description: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  cardId,
  description,
}) => {
  const [newDescription, setNewDescription] = useState('');
  const [isDescriptionEditing, setIsDescriptionEditing] = useState(false);
  const store = useContext(StoreContext);

  const addDescription = () => {
    if (newDescription) {
      store?.addNewDecription(cardId, newDescription);
      setNewDescription('');
    }
    setIsDescriptionEditing(false);
  };

  const onDescriptionChange = (
    e: React.ChangeEvent<HTMLInputElement>,
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
            onClick={() => setIsDescriptionEditing(true)}
          />
          <TrashFill
            className="icon-delete"
            size={17}
            onClick={() => store?.deleteDescription(cardId)}
          />
        </div>
      </div>

      {description && !isDescriptionEditing ? (
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
            onChange={onDescriptionChange}
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
