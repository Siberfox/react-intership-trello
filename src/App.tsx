/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';

import NameModal from './components/name-modal/name-modal';
import Board from './components/board/board';

import { Columns, Cards, Comments } from './data';
import { StoreContext } from './store-context';

import './App.css';

const App: React.FC = () => {
  const [user, setUser] = useState('');
  const [isModalShow, setIsModalShow] = useState(true);

  const [columns, setColumns] = useState(Columns);
  const [cards, setCards] = useState(Cards);
  const [comments, setComments] = useState(Comments);

  useEffect(() => {
    const storageNameValue = localStorage.getItem('username');
    if (storageNameValue) {
      setUser(storageNameValue);
    }
    const storageColumnsValue = localStorage.getItem('columns');
    if (storageColumnsValue) {
      setColumns(JSON.parse(storageColumnsValue));
    }
    const storageCardsValue = localStorage.getItem('cards');
    if (storageCardsValue) {
      setCards(JSON.parse(storageCardsValue));
    }
    const storageCommentsValue = localStorage.getItem('comments');
    if (storageCommentsValue) {
      setComments(JSON.parse(storageCommentsValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('columns', JSON.stringify(columns));
    localStorage.setItem('cards', JSON.stringify(cards));
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [columns, cards, comments]);

  const setUserName = (value: string): void => {
    setUser(value);
    localStorage.setItem('username', value);
  };

  const editColumnName = (columnId: number, newValue: string): void => {
    setColumns(
      columns.map((item) => {
        if (item.id === columnId) {
          item.name = newValue;
        }
        return item;
      }),
    );
  };

  const editCardName = (cardId: number, newValue: string): void => {
    setCards(
      cards.map((item) => {
        if (item.id === cardId) {
          item.name = newValue;
        }
        return item;
      }),
    );
  };

  const editComment = (commentId: number, newValue: string): void => {
    setComments(
      comments.map((item) => {
        if (item.id === commentId) {
          item.text = newValue;
        }
        return item;
      }),
    );
  };

  const addNewCard = (columnId: number, newValue: string): void => {
    setCards([
      ...cards,
      {
        name: newValue,
        id: cards[cards.length - 1].id + 1,
        columnId,
        description: '',
        author: user,
      },
    ]);
  };

  const addNewComment = (cardId: number, newValue: string): void => {
    setComments([
      ...comments,
      {
        name: user,
        text: newValue,
        id: comments[comments.length - 1].id + 1,
        cardId,
      },
    ]);
  };

  const addNewDecription = (cardId: number, value: string): void => {
    setCards(
      cards.map((item) => {
        if (item.id === cardId) {
          item.description = value;
        }
        return item;
      }),
    );
  };

  const deleteDescription = (cardId: number): void => {
    setCards(
      cards.map((item) => {
        if (item.id === cardId) {
          item.description = '';
        }
        return item;
      }),
    );
  };

  const deleteCard = (cardId: number): void => {
    setCards(cards.filter((item) => item.id !== cardId));
  };

  const deleteComment = (commentId: number): void => {
    setComments(comments.filter((item) => item.id !== commentId));
  };

  return (
    <div className="App">
      {user ? (
        <StoreContext.Provider
          value={{
            editColumnName,
            addNewCard,
            addNewComment,
            addNewDecription,
            deleteDescription,
            editCardName,
            deleteCard,
            editComment,
            deleteComment,
            cards,
            comments,
          }}
        >
          <Board username={user} columns={columns} />
        </StoreContext.Provider>
      ) : (
        <NameModal
          isShow={isModalShow}
          onHide={() => setIsModalShow(false)}
          setUserName={setUserName}
        />
      )}
    </div>
  );
};

export default App;
