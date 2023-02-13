import React from 'react';
import './font.css';
import { BrowserRouter } from 'react-router-dom';
import Transition from './components/Transition';
import GlobalStyle from './GlobalStyle';
import ScrollToTop from './components/ScrollToTop';
import ChennelIcon from './components/ChennelIcon';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Transition />
      <ChennelIcon />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
