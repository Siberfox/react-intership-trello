import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from './redux/slices/userSlice';

import NameModal from './components/name-modal/name-modal';
import Board from './components/board/board';


import './App.css';

const App: React.FC = () => {
  const { username } = useSelector(userSelector);

  return (
    <div className="App">
      {username ? <Board /> : <NameModal />}
    </div>
  );
};

export default App;
