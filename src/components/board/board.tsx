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
}

const Board: React.FC<BoardProps> = ({ username, columns }) => {
  return (
    <div className="board__wrapper">
      {columns.map((item) => {
        return <CardList key={item.id} item={item} username={username} />;
      })}

      <div className="board__new-card">
        <img src={Plus} alt="plus" />
        Добавить еще одну колонку
      </div>
    </div>
  );
};

export default Board;
