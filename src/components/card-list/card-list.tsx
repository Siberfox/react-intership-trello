import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FormControl, Form, Button } from 'react-bootstrap';
import { useAppDispatch } from '../../redux/store';
import { RootState } from '../../redux/root-reducer';

import { editColumnName } from '../../redux/columns/columns.actions';
import { addCard } from '../../redux/cards/cards.actions';


import Card from '../card/card';

import './card-list.styles.scss';
import Plus from '../../assets/plus.svg';

interface CardProps {
  item: {
    id: number;
    name: string;
  };
}

const CardList: React.FC<CardProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const [isShow, setIsShow] = useState(false);
  const [columnName, setColumnName] = useState('');
  const [newCard, setNewCard] = useState('');
  const [columnNameHidden, setColumnNameHidden] = useState(false);

  const columnCards = useSelector((state:RootState) =>
    state.cards.filter((card) => card.columnId === item.id),
  );
  const username = useSelector((state:RootState) =>
    state.user.currentUser,
  );


  const hideColumnName = (): void => {
    setColumnNameHidden(true);
  };

  const showColumnName = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      setColumnNameHidden(false);
      if (columnName) {
        dispatch(editColumnName([item.id, columnName]));
      }
    }
  };

  const onColumnNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setColumnName(e.target.value);
  };

  const showNewCardInput = (): void => {
    setIsShow(true);
  };

  const onNewCardChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewCard(e.target.value);
  };

  const onNewCardSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (newCard) {
      dispatch(addCard([item.id, newCard, username]));
      setNewCard('');
      setIsShow(false);
    }
    setIsShow(false);
  };

  return (
    <div className="card-list__wrapper">
      {columnNameHidden ? (
        <FormControl
          autoFocus
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder={item.name}
          onChange={onColumnNameChange}
          onKeyPress={showColumnName}
        />
      ) : (
        <div onClick={hideColumnName} role='button' onKeyPress={(e) => {if (e.key === 'Enter'){hideColumnName();}}} tabIndex={0}><h4>{item.name}</h4></div>
      )}

      {columnCards?.map(
        (card: {
          name: string;
          id: number;
          columnId: number;
          description: string;
          author: string;
        }) => {
          return (
            <Card
              key={card.id}
              card={card}
              columnName={item.name}
            />
          );
        },
      )}

      {isShow ? (
        <Form onSubmit={onNewCardSubmit} className="card-list__form">
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Заголовок карточки"
              autoFocus
              onChange={onNewCardChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Добавить карточку
          </Button>
        </Form>
      ) : (
        <button
          className="card-list__new-card"
          onClick={showNewCardInput}
          type="button"
        >
          <img src={Plus} alt="plus" />
          Добавить карточку
        </button>
      )}
    </div>
  );
};

export default CardList;
