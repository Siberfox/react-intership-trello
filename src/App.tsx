import React, { useState, useEffect } from "react";

import NameModal from "./components/name-modal/name-modal";
import Board from "./components/board/board";

import { Columns, Cards, Comments } from "./data";

import "./App.css";

interface MethodsContextInterface {
  editColumnName: (columnId: number, newValue: string) => void;
  editCardName: (cardId: number, newValue: string) => void;
  editComment: (commentId: number, newValue: string) => void;
  addNewCard: (columnId: number, newValue: string) => void;
  addNewComment: (cardId: number, newValue: string) => void;
  addNewDecription: (cardId: number, value: string) => void;
  deleteDescription: (cardId: number) => void;
  deleteCard: (cardId: number) => void;
  deleteComment: (commentId: number) => void;
}

export const MethodsContext = React.createContext<
  MethodsContextInterface | undefined
>(undefined);

const App: React.FC = () => {
  const [user, setUser] = useState("");
  const [modalShow, setModalShow] = useState(true);

  const [columns, setColumns] = useState(Columns);
  const [cards, setCards] = useState(Cards);
  const [comments, setComments] = useState(Comments);

  useEffect(() => {
    let storageNameValue = localStorage.getItem("username");
    if (storageNameValue) {
      setUser(storageNameValue);
    }
    let storageColumnsValue = localStorage.getItem("columns");
    if (storageColumnsValue) {
      setColumns(JSON.parse(storageColumnsValue));
    }
    let storageCardsValue = localStorage.getItem("cards");
    if (storageCardsValue) {
      setCards(JSON.parse(storageCardsValue));
    }
    let storageCommentsValue = localStorage.getItem("comments");
    if (storageCommentsValue) {
      setComments(JSON.parse(storageCommentsValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("columns", JSON.stringify(columns));
    localStorage.setItem("cards", JSON.stringify(cards));
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [columns, cards, comments]);

  const setUserName = (value: string): void => {
    setUser(value);
    localStorage.setItem("username", value);
  };

  const editColumnName = (columnId: number, newValue: string): void => {
    setColumns(
      columns.map((item) => {
        if (item.id === columnId) {
          item.columnName = newValue;
        }
        return item;
      })
    );
  };

  const editCardName = (cardId: number, newValue: string): void => {
    setCards(
      cards.map((item) => {
        if (item.id === cardId) {
          item.name = newValue;
        }
        return item;
      })
    );
  };

  const editComment = (commentId: number, newValue: string): void => {
    setComments(
      comments.map((item) => {
        if (item.id === commentId) {
          item.text = newValue;
        }
        return item;
      })
    );
  };

  const addNewCard = (columnId: number, newValue: string): void => {
    setCards([
      ...cards,
      {
        name: newValue,
        id: cards[cards.length - 1].id + 1,
        columnId: columnId,
        description: "",
        author: user,
        comments: 0,
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
        cardId: cardId,
      },
    ]);
    setCards(
      cards.map((item) => {
        if (item.id === cardId) {
          item.comments += 1;
        }
        return item;
      })
    );
  };

  const addNewDecription = (cardId: number, value: string) => {
    setCards(
      cards.map((item) => {
        if (item.id === cardId) {
          item.description = value;
        }
        return item;
      })
    );
  };

  const deleteDescription = (cardId: number): void => {
    setCards(
      cards.map((item) => {
        if (item.id === cardId) {
          item.description = "";
        }
        return item;
      })
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
        <MethodsContext.Provider
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
          }}
        >
          <Board
            username={user}
            columns={columns}
            cards={cards}
            comments={comments}
          />
        </MethodsContext.Provider>
      ) : (
        <NameModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setUserName={setUserName}
        />
      )}
    </div>
  );
};

export default App;
