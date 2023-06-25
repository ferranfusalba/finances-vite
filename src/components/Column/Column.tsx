import styled from "styled-components";
import Task from "../Task/Task";
import { useStore } from "@/store";
import { useState } from "react";

const StyledColumn = styled.div`
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

const Column = ({ state }: { state: string }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );
  const addTask = useStore((store) => store.addTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <StyledColumn
      onDragOver={(e) => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={(e) => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={(e) => {
        setDrop(false);
        moveTask(draggedTask, state);
        setDraggedTask(null);
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          Add
        </button>
      </div>
      {tasks.map((task) => (
        <Task title={task.title} key={task.title}></Task>
      ))}
      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input
              type="text"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </StyledColumn>
  );
};

export default Column;
