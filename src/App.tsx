import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import CustomModal from "./components/custom-popup/custom-popup.component";
import Board from "./components/board/board.component";

import "./App.css";

interface MethodsContextInterface {
  editColumnName: (id: string, newValue: string) => void;
  addNewCard: (id: string, newValue: string) => void;
  addNewComment: (columnId: string, cardId: string, value: string) => void;
  addNewDecription: (columnId: string, cardId: string, value: string) => void;
  deleteDescription: (columnId: string, cardId: string) => void;
  editCardName: (columnId: string, cardId: string, newValue: string) => void;
  deleteCard: (columnId: string, cardId: string) => void;
  editComment: (
    columnId: string,
    cardId: string,
    commentId: string,
    newValue: string
  ) => void;
  deleteComment: (columnId: string, cardId: string, commentId: string) => void;
}

export const MethodsContext = React.createContext<
  MethodsContextInterface | undefined
>(undefined);

const App: React.FC = () => {
  const [user, setUser] = useState("");
  const [modalShow, setModalShow] = useState(true);

  const [boardData, setBoardData] = useState([
    {
      id: nanoid(),
      columnName: "TODO",
      cards: [
        {
          cardName: "create page",
          id: nanoid(),
          description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repellendus, nesciunt similique ratione neque aspernatur consequatur veniam exercitationem nostrum quo laborum ipsa, esse nihil pariatur. Ex quasi explicabo fugit unde.`,
          comments: [
            { name: "Jessy", text: "LOL", id: nanoid() },
            {
              name: "Nancy",
              text: "Is this lorem ipsum??? Where is real description?",
              id: nanoid(),
            },
          ],
        },
        {
          cardName: "add feature",
          id: nanoid(),
          description: "",
          comments: [],
        },
        { cardName: "deploy", id: nanoid(), description: "", comments: [] },
      ],
    },
    {
      id: nanoid(),
      columnName: "In Progress",
      cards: [
        {
          cardName: "design for new page",
          id: nanoid(),
          description: "",
          comments: [
            {
              name: "Michael Scott",
              text: "NO... no no no please no",
              id: nanoid(),
            },
          ],
        },
      ],
    },
    {
      id: nanoid(),
      columnName: "Testing",
      cards: [
        {
          cardName: "write unit tests",
          id: nanoid(),
          description: "",
          comments: [],
        },
        {
          cardName: "hand testing",
          id: nanoid(),
          description: "",
          comments: [{ name: "Chief", text: "good luck!", id: nanoid() }],
        },
      ],
    },
    {
      id: nanoid(),
      columnName: "Done",
      cards: [
        {
          cardName: "create architecture",
          id: nanoid(),
          description: "",
          comments: [],
        },
      ],
    },
  ]);

  useEffect(() => {
    let storageNameValue = localStorage.getItem("username");
    if (storageNameValue) {
      setUser(storageNameValue);
    }
    let storageBoardValue = localStorage.getItem("board");
    if (storageBoardValue) {
      setBoardData(JSON.parse(storageBoardValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("board", JSON.stringify(boardData));
  }, [boardData]);

  const setUserName = (value: string): void => {
    setUser(value);
    localStorage.setItem("username", value);
  };

  const editColumnName = (id: string, newValue: string): void => {
    setBoardData(
      boardData.map((item) => {
        if (item.id === id) {
          item.columnName = newValue;
        }
        return item;
      })
    );
  };

  const addNewCard = (id: string, newValue: string): void => {
    setBoardData(
      boardData.map((item) => {
        if (item.id === id) {
          item.cards.push({
            cardName: newValue,
            id: nanoid(),
            description: "",
            comments: [],
          });
        }
        return item;
      })
    );
  };

  const editCardName = (
    columnId: string,
    cardId: string,
    newValue: string
  ): void => {
    setBoardData(
      boardData.map((item) => {
        if (item.id === columnId) {
          item.cards.map((card) => {
            if (card.id === cardId) {
              card.cardName = newValue;
            }
            return card;
          });
        }
        return item;
      })
    );
  };

  const editComment = (
    columnId: string,
    cardId: string,
    commentId: string,
    newValue: string
  ): void => {
    setBoardData(
      boardData.map((item) => {
        if (item.id === columnId) {
          item.cards.map((card) => {
            if (card.id === cardId) {
              card.comments.map((comment) => {
                if (comment.id === commentId) {
                  comment.text = newValue;
                }
                return comment;
              });
            }
            return card;
          });
        }
        return item;
      })
    );
  };

  const addNewComment = (
    columnId: string,
    cardId: string,
    value: string
  ): void => {
    setBoardData(
      boardData.map((item) => {
        if (item.id === columnId) {
          item.cards.map((card) => {
            if (card.id === cardId) {
              card.comments.push({ name: user, text: value, id: nanoid() });
            }
            return card;
          });
        }
        return item;
      })
    );
  };

  const addNewDecription = (
    columnId: string,
    cardId: string,
    value: string
  ) => {
    setBoardData(
      boardData.map((item) => {
        if (item.id === columnId) {
          item.cards.map((card) => {
            if (card.id === cardId) {
              card.description = value;
            }
            return card;
          });
        }
        return item;
      })
    );
  };

  const deleteDescription = (columnId: string, cardId: string): void => {
    setBoardData(
      boardData.map((item) => {
        if (item.id === columnId) {
          item.cards.map((card) => {
            if (card.id === cardId) {
              card.description = "";
            }
            return card;
          });
        }
        return item;
      })
    );
  };

  const deleteCard = (columnId: string, cardId: string): void => {
    setBoardData(
      boardData.map((item) => {
        if (item.id === columnId) {
          item.cards = item.cards.filter((card) => card.id !== cardId);
        }
        return item;
      })
    );
  };

  const deleteComment = (
    columnId: string,
    cardId: string,
    commentId: string
  ): void => {
    setBoardData(
      boardData.map((item) => {
        if (item.id === columnId) {
          item.cards.map((card) => {
            if (card.id === cardId) {
              card.comments = card.comments.filter(
                (comment) => comment.id !== commentId
              );
            }
            return card;
          });
        }
        return item;
      })
    );
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
          <Board username={user} data={boardData} />
        </MethodsContext.Provider>
      ) : (
        <CustomModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setUserName={setUserName}
        />
      )}
    </div>
  );
};

export default App;
