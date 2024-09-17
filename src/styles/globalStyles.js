// src/styles/globalStyles.js
import { createGlobalStyle } from 'styled-components';
import { applyColorStyles } from './colors';

export const GlobalStyles = createGlobalStyle`
  ${applyColorStyles()} /* CSS 변수 정의 */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  body {
    background-color: var(--white);
    color: var(--text);
    line-height: 1.6;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    
    border: 1px solid var(--border); /* 버튼의 기본 테두리 색상 */
    background-color: var(--white); /* 버튼의 기본 배경색 */
    cursor: pointer;
    background: none;
    padding: 0;
  }

  .hidden {
    display: none;
  }
`;