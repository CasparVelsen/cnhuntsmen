import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    margin: 0;
    font-family: sans-serif;
    font-size: 112.5%;
  }
  input, label, button, textarea {
    font-size: 1em;
  }
  header {
      padding: 0 20px;
      height: 48px;
      display: flex;
      align-items: center;
      gap: 300px;
      background-color: rgb(90, 125, 90);
  }
`;
