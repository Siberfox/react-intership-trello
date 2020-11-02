import React, { useState, useContext } from "react";

import { FormControl, Form, Button } from "react-bootstrap";

import Card from "../card/card";
import { MethodsContext, CardsContext } from "../../App";

import "./card-list.styles.scss";
import Plus from "../../assets/plus.svg";

interface CardProps {
  username: string;
  item: {
    id: number;
    columnName: string;
  };
}

const CardList: React.FC<CardProps> = ({ item, username }) => {
  const [isShow, setIsShow] = useState(false);
  const [columnName, setColumnName] = useState("");
  const [newCard, setNewCard] = useState("");
  const [columnNameHidden, setColumnNameHidden] = useState(false);

  const methods = useContext(MethodsContext);
  const cards = useContext(CardsContext);
  const currentCards = cards?.filter((card) => card.columnId === item.id);

  const hideColumnName = (): void => {
    setColumnNameHidden(true);
  };

  const showColumnName = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      setColumnNameHidden(false);
      if (columnName) {
        methods?.editColumnName(item.id, columnName);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setColumnName(e.target.value);
  };

  const showNewCardInput = (): void => {
    setIsShow(true);
  };

  const newCardHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (newCard) {
      methods?.addNewCard(item.id, newCard);
      setNewCard("");
      setIsShow(false);
    }
    setIsShow(false);
  };

  const NewCardHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewCard(e.target.value);
  };

  return (
    <div className="card-list__wrapper">
      {columnNameHidden ? (
        <FormControl
          autoFocus
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder={item.columnName}
          onChange={handleChange}
          onKeyPress={showColumnName}
        />
      ) : (
        <h4 onClick={hideColumnName}>{item.columnName}</h4>
      )}

      {currentCards?.map(
        (card: {
          name: string;
          id: number;
          columnId: number;
          description: string;
          author: string;
          comments: number;
        }) => {
          return (
            <Card
              key={card.id}
              card={card}
              username={username}
              columnName={item.columnName}
            />
          );
        }
      )}

      {isShow ? (
        <Form onSubmit={newCardHandler} className="card-list__form">
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Заголовок карточки"
              autoFocus
              onChange={NewCardHandleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Добавить карточку
          </Button>
        </Form>
      ) : (
        <button className="card-list__new-card" onClick={showNewCardInput}>
          <img src={Plus} alt="plus" />
          Добавить карточку
        </button>
      )}
    </div>
  );
};

export default CardList;
