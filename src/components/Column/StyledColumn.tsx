// Dependencies > Styled Components
import styled from "styled-components";

// TODO: Apply Concentric CSS rules if definitive Column component stays
export const StyledColumn = styled.div`
  background: var(--color-gray-dark);
  min-height: 20rem;
  color: #fff;
  width: 33%;
  max-width: 20rem;
  margin: 0 1rem;
  border-radius: 0.25rem;
  padding: 0.5rem;

  .titleWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      all: unset;
      color: black;
      background: white;
      padding: 0.5rem;
      border-radius: 4px;
      height: fit-content;
      cursor: pointer;

      &:hover {
        background: var(--color-gray-light);
      }
    }
  }

  .Modal {
    position: absolute;
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;
