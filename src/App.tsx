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
        { cardName: "create page" },
        { cardName: "add feature" },
        { cardName: "deploy" },
      ],
    },
    {
      id: nanoid(),
      boardName: "In Progress",
      cards: [{ cardName: "design for new page" }],
    },
    {
      id: nanoid(),
      boardName: "Testing",
      cards: [{ cardName: "write unit tests" }, { cardName: "hand testing" }],
    },
    {
      id: nanoid(),
      boardName: "Done",
      cards: [{ cardName: "create architecture" }],
    },
  ]);

  useEffect(() => {
    let storageValue = localStorage.getItem("username");
    if (storageValue) {
      setUser(storageValue);
    }
  }, []);

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

  return (
    <div className="App">
      {user ? (
        <Board username={user} data={boardData} setBoardName={setBoardName} />
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
