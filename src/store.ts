import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface Task {
  title: string;
  status: string;
}

export interface Account {
  title: string;
}

interface Store {
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

const store = (set: any) => ({
  // Tasks
  tasks: [],
  draggedTask: null,
  addTask: (title: string, state: string) =>
    set(
      (store: Store) => ({ tasks: [...store.tasks, { title, state }] }),
      false,
      "ADD_TASK"
    ),
  deleteTask: (title: string, state: string) =>
    set(
      (store: Store) => ({
        tasks: store.tasks.filter((task: Task) => task.title !== title),
        // TODO: Replace this by unique id instead of title
      }),
      false,
      "DELETE_TASK"
    ),
  setDraggedTask: (title: string) => set({ draggedTask: title }),
  moveTask: (title: string, state: string) =>
    set(
      (store: Store) => ({
        tasks: store.tasks.map((task: Task) =>
          task.title === title ? { title, state } : task
        ),
      }),
      false,
      "MOVE_TASK"
    ),
  // Accounts
  accounts: [],
  addAccount: (title: string) =>
    set(
      (store: Store) => ({ accounts: [...store.accounts, { title }] }),
      false,
      "ADD_ACCOUNT"
    ),
  // updateAccount: (title: string) => set(), // TODO: Add updateAccount action
  deleteAccount: (title: string) =>
    set(
      (store: Store) => ({
        accounts: store.accounts.filter(
          (account: Account) => account.title !== title
        ),
        // TODO: Replace this by unique id instead of title
      }),
      false,
      "DELETE_ACCOUNT"
    ),
});

const log = (config: any) => (set: any, get: any, api: any) =>
  config(
    (...args: any) => {
      //   const current = get();
      //   if (!current) {
      //     // get state from external store
      //   }
      console.log(args, typeof args);
      set(...args);
    },
    get,
    api
  );

export const useStore = create(
  log(persist(devtools(store), { name: "store" }))
);
