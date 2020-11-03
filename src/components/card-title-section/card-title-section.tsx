import React, { useState } from 'react';

import { Modal, FormControl, InputGroup, Button } from 'react-bootstrap';

import { PencilFill, TrashFill } from 'react-bootstrap-icons';

import { useAppDispatch } from '../../redux/store';
import { editCardName, deleteCard } from '../../redux/cards/cards.actions';

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
  const dispatch = useAppDispatch();
  const [newCardName, setNewCardName] = useState('');
  const [isEditCardName, setIsEditCardName] = useState(false);

  const addDescription = () => {
    if (newCardName) {
      dispatch(editCardName([cardId, newCardName]));
      setNewCardName('');
    }
    setIsEditCardName(false);
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
        {isEditCardName ? (
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
                onClick={() => setIsEditCardName(true)}
              />
              <TrashFill
                className="icon-delete"
                size={20}
                onClick={() => {
                  dispatch(deleteCard(cardId));
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
