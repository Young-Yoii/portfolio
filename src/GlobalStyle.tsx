import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  html, body { 
    font-size: 62.5%;
    height: 100%;
  }
  ul, li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  .transition-group {
    width: 100%;
    height: 100%;
  }
      
  .fade-enter {
    opacity: 0;
  }
      
  .fade-enter-active {
    opacity: 1;
    transition: all 1s ease-in;
  }
      
  .fade-exit {
    opacity: 1;
  }
      
  .fade-exit-active {
    opacity: 0;
    transition: all 1s ease-in;
  }

  .item-title {
    font-size: 1.6rem;
    padding-bottom: 5px;
    font-weight: bold;
  }

  .item-date {
    font-size: 1.4rem;
    color: gray;
    margin: 3px 0;
    font-weight: 500;
  }
`;

export default GlobalStyle;
