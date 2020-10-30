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
      boardName: "In Progress",
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
      boardName: "Testing",
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
      boardName: "Done",
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
