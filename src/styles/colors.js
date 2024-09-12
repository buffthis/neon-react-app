// src/styles/colors.js
export const COLORS = {
    primary: '#C4D7EC',
    secondary: '#f0f0f0',
    text: '#484848',
    white: '#ffffff',
    gray: '#767676',
    border: '#dddddd',
    hover: '#e8e8e8',
  };

// CSS 변수를 포함한 스타일을 전역적으로 적용할 수 있도록 정의하는 함수
export const applyColorStyles = () => `
  :root {
    --primary: ${COLORS.primary};
    --secondary: ${COLORS.secondary};
    --text: ${COLORS.text};
    --white: ${COLORS.white};
    --gray: ${COLORS.gray};
    --border: ${COLORS.border};
    --hover: ${COLORS.hover};
  }
`;