/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/root-reducer';

import NameModal from './components/name-modal/name-modal';
import Board from './components/board/board';


import './App.css';

const App: React.FC = () => {
  const [isModalShow, setIsModalShow] = useState(true);

  const user = useSelector((state:RootState) =>
    state.user.currentUser,
  );
  
  return (
    <div className="App">
      {user ? (
        <Board />
      ) : (
        <NameModal
          isShow={isModalShow}
          onHide={() => setIsModalShow(false)}
        />
      )}
    </div>
  );
};

export default App;
