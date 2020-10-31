import React, { useState, useContext } from "react";

import { FormControl, Form, Button } from "react-bootstrap";

import Card from "../card/card.component";
import { MethodsContext } from "../../App";

import "./card-list.styles.scss";
import Plus from "../../assets/plus.svg";

interface CardProps {
  username: string;
  item: {
    id: string;
    columnName: string;
    cards: {
      id: string;
      cardName: string;
      description: string;
      comments: { name: string; text: string; id: string }[];
    }[];
  };
}

const CardList: React.FC<CardProps> = ({ item, username }) => {
  const [show, setShow] = useState(false);
  const [inputColumnName, setInputColumnName] = useState("");
  const [inputNewCard, setInputNewCard] = useState("");
  const [columnNameHidden, setColumnNameHidden] = useState(false);

  const methods = useContext(MethodsContext);

  const hideColumnName = (): void => {
    setColumnNameHidden(true);
  };

  const showColumnName = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      setColumnNameHidden(false);
      if (inputColumnName) {
        methods?.editColumnName(item.id, inputColumnName);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputColumnName(e.target.value);
  };

  const showNewCardInput = (): void => {
    setShow(true);
  };

  const newCardHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputNewCard) {
      methods?.addNewCard(item.id, inputNewCard);
      setInputNewCard("");
      setShow(false);
    }
    setShow(false);
  };

  const NewCardHandleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setInputNewCard(e.target.value);
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

      {item.cards.map(
        (i: {
          id: string;
          cardName: string;
          description: string;
          comments: { name: string; text: string; id: string }[];
        }) => {
          return (
            <Card
              key={i.id}
              cardName={i.cardName}
              description={i.description}
              comments={i.comments}
              columnName={item.columnName}
              columnId={item.id}
              cardId={i.id}
              username={username}
            />
          );
        }
      )}

      {show ? (
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
