// Dependencies > Styled Components
import styled from "styled-components";

// Wrapper
export const StyledAccountsMenu = styled.div`
  display: flex;
`;

// Shared Button styles
export const StyledAccountButton = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 0 0.3125rem;
  border: 2px solid white;
  background: transparent;
  padding: 0 0.8rem;
  width: max-content;
  min-width: 10rem;
  height: 2.75rem;
  button:nth-child(2) {
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;
  }
`;

// Add Account Button Wrapper
export const StyledAddAccountButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  li {
    min-width: 3rem;
    margin: 0 0.625rem;
  }
`;

// Accounts List Wrapper (horizontal scroll)
export const StyledAccountsListWrapper = styled.ul`
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
  div:nth-child(1) {
    li {
      margin-left: 0;
    }
  }
  div:last-of-type {
    li {
      margin-right: 0.625rem;
    }
  }
`;
