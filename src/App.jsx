import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Qna from './components/Qna/Qna';

const App = () => {
  return (
    <div>

      <Navbar></Navbar>

      <Home></Home>

      <Qna></Qna>

    </div>
  );
};

export default App;