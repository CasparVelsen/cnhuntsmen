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
    font-family: 'Kanit', sans-serif;
    font-size: 112.5%;
  }

  input, label, button, textarea {
    font-size: 1em;
  }
  
  header {
      padding: 0 20px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: rgb(90, 125, 90);
      font-size: 1.3rem;
  }

  main {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  footer {
      padding: 20px;
      margin-top: 20px;
      height: 150px;
      background-color: grey;
      font-size: 1.3rem;
      bottom: 0;
      width: 100%
  }
`;
