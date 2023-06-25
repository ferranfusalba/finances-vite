// Zustand Store
import { useStore } from "@/store";

// Dependencies > ClassNames
import classNames from "classnames";

// Domain
import { StyledTask } from "./StyledTask";

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
