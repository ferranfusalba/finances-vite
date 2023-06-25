import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
  // Tasks
  tasks: [],
  draggedTask: null,
  addTask: (title, state) =>
    set(
      (store) => ({ tasks: [...store.tasks, { title, state }] }),
      false,
      "ADD_TASK"
    ),
  deleteTask: (title, state) =>
    set(
      (store) => ({
        tasks: store.tasks.filter((task) => task.title !== title),
        // TODO: Replace this by unique id instead of title
      }),
      false,
      "DELETE_TASK"
    ),
  setDraggedTask: (title) => set({ draggedTask: title }),
  moveTask: (title, state) =>
    set(
      (store) => ({
        tasks: store.tasks.map((task) =>
          task.title === title ? { title, state } : task
        ),
      }),
      false,
      "MOVE_TASK"
    ),
  // Accounts
  accounts: [],
  addAccount: (title) =>
    set(
      (store) => ({ accounts: [...store.accounts, { title }] }),
      false,
      "ADD_ACCOUNT"
    ),
  // updateAccount: (title) => set(),
  deleteAccount: (title) =>
    set(
      (store) => ({
        accounts: store.accounts.filter((account) => account.title !== title),
        // TODO: Replace this by unique id instead of title
      }),
      false,
      "DELETE_ACCOUNT"
    ),
});

const log = (config) => (set, get, api) =>
  config(
    (...args) => {
      //   const current = get();
      //   if (!current) {
      //     // get state from external store
      //   }
      // console.log(args);
      set(...args);
    },
    get,
    api
  );

export const useStore = create(
  log(persist(devtools(store), { name: "store" }))
);
