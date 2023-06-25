// Styled Components
import styled from "styled-components";

const StyledTask = styled.div`
  background-color: white;
  border-radius: 0.25rem;
  min-height: 5rem;
  color: black;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: move;

  .bottomWrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }

  .status {
    font-size: small;
    background: var(--color-gray-light);
    padding: 0.25rem;
    border-radius: 0.25rem;
  }

  .PLANNED {
    background: var(--color-gray-light);
  }

  .ONGOING {
    background: var(--color-ongoing);
  }

  .DONE {
    background: var(--color-done);
  }
`;
