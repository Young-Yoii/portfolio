import React from 'react';
import './font.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Transition from './components/Transition';
import GlobalStyle from './GlobalStyle';
import ChennelIcon from './components/ChennelIcon';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <About />
      <ChennelIcon />
    </BrowserRouter>
  );
}

export default App;
