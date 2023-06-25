export interface Task {
  title: string;
  status: string;
}

export interface Account {
  title: string;
}

export interface Store {
  accounts: Array<Account>;
  addAccount: (title: string) => void;
  addTask: (title: string, state: string) => void;
  deleteAccount: (title: string) => void;
  deleteTask: (title: string, state: string) => void;
  draggedTask: (title: string) => void;
  moveTask: (title: string, state: string) => void;
  setDraggedTask: (title: string) => void;
  tasks: Array<Task>;
}
