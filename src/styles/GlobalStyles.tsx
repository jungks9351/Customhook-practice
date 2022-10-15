import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  
  html {
    font-family: 'Roboto', sans-serif;
  }
  body,h1, h2, h3, h4, h5, h6,ul, p {
    margin: 0;
    padding: 0;
    border: 0;
  }
  .a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    margin: -1px;
    clip-path: polygon(0 0, 0 0, 0 0);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input, button, textarea {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    background-color: inherit;
  }
  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
