// Dependencies > Styled Components
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  --color-gray: #333333;
  --color-gray-dark: #222222;
  --color-gray-light: #cccccc;
  --color-ongoing: #98c1d9;
  --color-done: #ee6c4d;
}

h2 {
  margin: 0;
}

// TODO: Move this to StyledSectionHeader with subtitle or proper component
h3, small {
  margin: 0;
  padding: 1rem;
}

body {
  margin: 0;
}

// TODO: Testing Zustand
.settings {
  display: flex;
  justify-content: center;
  align-items: start;
}

* {
  box-sizing: border-box;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

`;

export default GlobalStyle;
