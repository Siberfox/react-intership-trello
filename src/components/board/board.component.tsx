import React from "react";

import CardList from "../card-list/card-list.component";
import Plus from "../../assets/plus.svg";

import "./board.styles.scss";

interface BoardProps {
  username: string;
  data: {
    id: string;
    columnName: string;
    cards: {
      id: string;
      cardName: string;
      description: string;
      comments: { name: string; text: string; id: string }[];
    }[];
  }[];
}

const Board: React.FC<BoardProps> = ({ username, data }) => {
  return (
    <div className="board__wrapper">
      {data.map((item) => {
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
