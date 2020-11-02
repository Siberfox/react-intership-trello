import React, { useState, useContext } from 'react';

import { Modal, FormControl, InputGroup, Button } from 'react-bootstrap';

import { PencilFill, TrashFill } from 'react-bootstrap-icons';

import { StoreContext } from '../../store-context';

import './card-title-sectin.styles.scss';

interface CardTitleSectionProps {
  cardName: string;
  cardId: number;
  columnName: string;
  author: string;
}

const CardTitleSection: React.FC<CardTitleSectionProps> = ({
  cardName,
  cardId,
  columnName,
  author,
}) => {
  const [newCardName, setNewCardName] = useState('');
  const [editCardName, setEditCardName] = useState(false);
  const store = useContext(StoreContext);

  const addDescription = () => {
    if (newCardName) {
      store?.editCardName(cardId, newCardName);
      setNewCardName('');
    }
    setEditCardName(false);
  };

  const onCardNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
              onChange={onCardNameChange}
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
              <small>({author})</small>
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
                  store?.deleteCard(cardId);
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
