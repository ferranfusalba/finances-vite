// Zustand Store
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// Types
import { Store, Task, Account } from "@/types/interfaces";

// TODO: Replace any (check development issues)
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
  getAccountsList: (accounts: Array<Account>) =>
    set((store: Store) => ({ accounts: accounts }), false, "GET_ACCOUNTS_LIST"),
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

// TODO: Replace any (check development issues)
const log = (config: any) => (set: any, get: any, api: any) =>
  config(
    // TODO: Replace any (check development issues)
    (...args: any) => {
      //   const current = get();
      //   if (!current) {
      //     // get state from external store
      //   }
      // console.log(args, typeof args);
      set(...args);
    },
    get,
    api
  );

export const useStore = create(
  log(persist(devtools(store), { name: "store" }))
);
