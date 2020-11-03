import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/root-reducer';

import CardList from '../card-list/card-list';
import Plus from '../../assets/plus.svg';

import './board.styles.scss';

const Board: React.FC = () => {
  const columns = useSelector((state:RootState) =>
    state.columns,
  );

  return (
    <div className="board__wrapper">
      {columns.map((item) => {
        return <CardList key={item.id} item={item} />;
      })}

      <div className="board__new-card">
        <img src={Plus} alt="plus" />
        Добавить еще одну колонку
      </div>
    </div>
  );
};

export default Board;
