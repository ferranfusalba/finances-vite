// Dependencies > Styled Components
import styled from "styled-components";

export const StyledAccountsMenu = styled.div`
  display: flex;
`;

export const StyledAccountButton = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 0.625rem;
  border: 2px solid white;
  background: transparent;
  padding: 0 0.8rem;
  width: max-content;
  min-width: 10rem;
  height: 2.75rem;
  &:last-of-type {
    margin-right: 0;
  }
  button:nth-child(2) {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
  }
`;

export const StyledButtonArea = styled.div``;

export const StyledScrollArea = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  padding: 0;
  overflow: auto;
  text-align: center;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;
