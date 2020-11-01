import React, { useState, useEffect } from "react";

import NameModal from "./components/name-modal/name-modal";
import Board from "./components/board/board";

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

  const [columns, setColumns] = useState([
    { id: 1, columnName: "TODO" },
    { id: 2, columnName: "add feature" },
    { id: 3, columnName: "In Progress" },
    { id: 4, columnName: "Done" },
  ]);

  const [cards, setCards] = useState([
    {
      name: "create page",
      id: 11,
      columnId: 1,
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repellendus, nesciunt similique ratione neque aspernatur consequatur veniam exercitationem nostrum quo laborum ipsa, esse nihil pariatur. Ex quasi explicabo fugit unde.`,
      author: "Jack",
      comments: 2,
    },
    {
      name: "add feature",
      id: 12,
      columnId: 1,
      description: "",
      author: "Jack",
      comments: 0,
    },
    {
      name: "deploy",
      id: 13,
      columnId: 1,
      description: "",
      author: "Phil",
      comments: 0,
    },
    {
      name: "design for new page",
      id: 14,
      columnId: 2,
      description: "",
      author: "Helen",
      comments: 1,
    },
    {
      name: "write unit tests",
      id: 15,
      columnId: 3,
      description: "",
      author: "Yanis",
      comments: 0,
    },
    {
      name: "hand testing",
      id: 16,
      columnId: 3,
      description: "",
      author: "Yanis",
      comments: 1,
    },
    {
      name: "create architecture",
      id: 17,
      columnId: 4,
      description: "",
      author: "Jack",
      comments: 0,
    },
  ]);

  const [comments, setComments] = useState([
    { name: "Jessy", text: "LOL", id: 101, cardId: 11 },
    {
      name: "Nancy",
      text: "Is this lorem ipsum??? Where is real description?",
      id: 102,
      cardId: 11,
    },
    { name: "Chief", text: "good luck!", id: 103, cardId: 14 },
    {
      name: "Michael Scott",
      text: "NO... no no no please no",
      id: 104,
      cardId: 16,
    },
  ]);

  useEffect(() => {
    let storageNameValue = localStorage.getItem("username");
    if (storageNameValue) {
      setUser(storageNameValue);
    }
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("board", JSON.stringify(boardData));
  // }, [boardData]);

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
