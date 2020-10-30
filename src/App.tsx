import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import CustomModal from "./components/custom-popup/custom-popup.component";
import Board from "./components/board/board.component";

import "./App.css";

const App: React.FC = () => {
  const [user, setUser] = useState("");
  const [modalShow, setModalShow] = useState(true);

  const [boardData, setBoardData] = useState([
    {
      id: nanoid(),
      boardName: "TODO",
      cards: [
        {
          cardName: "create page",
          id: nanoid(),
          comments: [{ text: "LOL" }, { text: "NO... no no no please no" }],
        },
        { cardName: "add feature", id: nanoid(), comments: [] },
        { cardName: "deploy", id: nanoid(), comments: [] },
      ],
    },
    {
      id: nanoid(),
      boardName: "In Progress",
      cards: [{ cardName: "design for new page", id: nanoid(), comments: [] }],
    },
    {
      id: nanoid(),
      boardName: "Testing",
      cards: [
        { cardName: "write unit tests", id: nanoid(), comments: [] },
        {
          cardName: "hand testing",
          id: nanoid(),
          comments: [{ text: "good luck!" }],
        },
      ],
    },
    {
      id: nanoid(),
      boardName: "Done",
      cards: [{ cardName: "create architecture", id: nanoid(), comments: [] }],
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

  // useEffect(() => {
  //   localStorage.setItem("board", JSON.stringify(boardData));
  // }, [boardData]);

  const setUserName = (value: string): void => {
    setUser(value);
    localStorage.setItem("username", value);
  };

  const setBoardName = (id: string, newValue: string): void => {
    setBoardData(
      boardData.map((item) => {
        if (item.id === id) {
          item.boardName = newValue;
        }
        return item;
      })
    );
  };

  const addNewCard = (id: string, newValue: string): void => {
    setBoardData(
      boardData.map((item) => {
        if (item.id === id) {
          item.cards.push({ cardName: newValue, id: nanoid(), comments: [] });
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      {user ? (
        <Board
          username={user}
          data={boardData}
          setBoardName={setBoardName}
          addNewCard={addNewCard}
        />
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
