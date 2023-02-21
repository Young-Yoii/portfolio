import React from 'react';
import './font.css';
import { BrowserRouter } from 'react-router-dom';
import Transition from './components/Transition';
import GlobalStyle from './GlobalStyle';
import ChennelIcon from './components/ChennelIcon';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <Transition />
      <ChennelIcon />
    </BrowserRouter>
  );
}

export default App;
