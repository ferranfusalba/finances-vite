// Dependencies > Styled Components
import styled from "styled-components";

export const StyledTabBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #131313;
  width: 100vw;
  height: 3.75rem;
  ul {
    display: grid;
    align-items: center;
    margin: 0;
    height: 100%;
    text-align: center;
    list-style-type: none;
    a,
    a > li {
      display: flex;
      align-items: center;
    }
    a {
      height: 100%;
      text-decoration: none;
      -webkit-tap-highlight-color: transparent;
      li {
        font-weight: 500;
        color: white;
      }
    }
  }
  @media screen and (min-width: 75rem) {
    ul {
      grid-template-columns: repeat(auto-fill, minmax(9.375rem, 1fr));
      padding: 0 0 0 1.625rem;
      a,
      a > li {
        flex-direction: row;
        gap: 0.75rem;
        justify-content: flex-start;
        font-size: 0.875rem;
      }
    }
  }
  @media screen and (max-width: 75rem) {
    ul {
      grid-template-columns: repeat(5, 1fr);
      padding: 0;
      a,
      a > li {
        flex-direction: column;
        gap: 0.375rem;
        justify-content: center;
        font-size: 0.75rem;
      }
    }
  }
`;
