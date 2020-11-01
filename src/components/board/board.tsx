import React from "react";

import CardList from "../card-list/card-list";
import Plus from "../../assets/plus.svg";

import "./board.styles.scss";

interface BoardProps {
  username: string;
  columns: {
    id: number;
    columnName: string;
  }[];
  cards: {
    id: number;
    name: string;
    columnId: number;
    description: string;
    author: string;
    comments: number;
  }[];
  comments: {
    id: number;
    cardId: number;
    name: string;
    text: string;
  }[];
}

const Board: React.FC<BoardProps> = ({
  username,
  columns,
  cards,
  comments,
}) => {
  return (
    <div className="board__wrapper">
      {columns.map((item) => {
        return (
          <CardList
            key={item.id}
            item={item}
            username={username}
            cards={cards}
            comments={comments}
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
