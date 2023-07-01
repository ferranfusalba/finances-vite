// Dependencies > Styled Components
import styled from "styled-components";

export const StyledAccountsMenu = styled.div`
  display: flex;
`;

export const StyledAccountButton = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.8rem;
  min-width: 10rem;
  height: 2.75rem;
  background: transparent;
  border: 2px solid white;
  margin: 0 0.625rem;
  gap: 8px;
  width: max-content;
  &:last-of-type {
    margin-right: 0;
  }
`;

export const StyledButtonArea = styled.div``;

export const StyledScrollArea = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  padding: 0;
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
