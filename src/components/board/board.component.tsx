import React from "react";

import CardList from "../card-list/card-list";
import Plus from "../../assets/plus.svg";

import "./board.styles.scss";

interface BoardProps {
  username: string;
  data: any[];
  setBoardName: (id: string, newValue: string) => void;
  addNewCard: (id: string, newValue: string) => void;
}

const Board: React.FC<BoardProps> = ({
  username,
  data,
  setBoardName,
  addNewCard,
}) => {
  return (
    <div className="board__wrapper">
      {data.map((item) => {
        return (
          <CardList
            key={item.id}
            item={item}
            setBoardName={setBoardName}
            addNewCard={addNewCard}
          />
        );
      })}

      <div className="board__new-card">
        <img src={Plus} alt="plus" />
        Добавить еще одну колонку
      </div>
    </div>
  );
};

export default Board;
