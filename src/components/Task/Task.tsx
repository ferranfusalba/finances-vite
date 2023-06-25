// Zustand Store
import { useStore } from "@/store";

// Dependencies > ClassNames
import classNames from "classnames";

// Styled Components TODO: Move to specific file
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

const Task = ({ title }: { title: string }) => {
  const task = useStore((store) =>
    store.tasks.find(
      (task: { title: string; state: string }) => task.title === title
    )
  );
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const deleteTask = useStore((store) => store.deleteTask);

  return (
    <StyledTask
      draggable
      onDragStart={() => {
        setDraggedTask(task.title);
      }}
    >
      <div>{task.title}</div>
      <div className="bottomWrapper">
        <div onClick={() => deleteTask(task.title)}>Delete</div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </StyledTask>
  );
};

export default Task;
