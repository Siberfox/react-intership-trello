import React, { useState } from "react";

import { FormControl, Form, Button } from "react-bootstrap";

import Card from "../card/card.component";

import "./card-list.styles.scss";
import Plus from "../../assets/plus.svg";

interface CardProps {
  item: any;
  setBoardName: (id: string, newValue: string) => void;
  addNewCard: (id: string, newValue: string) => void;
}

const CardList: React.FC<CardProps> = ({ item, setBoardName, addNewCard }) => {
  const [show, setShow] = useState(false);
  const [inputBoardName, setInputBoardName] = useState("");
  const [inputNewCard, setInputNewCard] = useState("");
  const [boardNameHidden, setBoardNameHidden] = useState(false);

  const hideBoardName = (): void => {
    setBoardNameHidden(true);
  };

  const showBoardName = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      setBoardNameHidden(false);
      if (inputBoardName) {
        setBoardName(item.id, inputBoardName);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputBoardName(e.target.value);
  };

  const showNewCardInput = (): void => {
    setShow(true);
  };

  const newCardHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (inputNewCard) {
      addNewCard(item.id, inputNewCard);
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
      {boardNameHidden ? (
        <FormControl
          autoFocus
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder={item.boardName}
          onChange={handleChange}
          onKeyPress={showBoardName}
        />
      ) : (
        <h4 onClick={hideBoardName}>{item.boardName}</h4>
      )}

      {item.cards.map((i: any) => {
        return <Card key={i.id} name={i.cardName} comments={i.comments} />;
      })}

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
