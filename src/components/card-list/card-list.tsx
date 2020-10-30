import React, { useState } from "react";

import { FormControl } from "react-bootstrap";

import Card from "../card/card.component";

import "./card-list.styles.scss";
import Plus from "../../assets/plus.svg";

interface CardProps {
  item: any;
  setBoardName: (id: string, newValue: string) => void;
}

const CardList: React.FC<CardProps> = ({ item, setBoardName }) => {
  const [inputValue, setInputValue] = useState("");
  const [boardNameHidden, setBoardNameHidden] = useState(false);

  const hideBoardName = (): void => {
    setBoardNameHidden(true);
  };

  const showBoardName = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      setBoardNameHidden(false);
      if (inputValue) {
        setBoardName(item.id, inputValue);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
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
        return <Card name={i.cardName} />;
      })}

      <button className="card-list__new-card">
        <img src={Plus} alt="plus" />
        Добавить карточку
      </button>
    </div>
  );
};

export default CardList;
