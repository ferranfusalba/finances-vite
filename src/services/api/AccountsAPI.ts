// Zustand Store
import { useStore } from "@/store";

// Services > API
import axios from "axios";

// Types
import { Account } from "@/types/interfaces";

export const getAccountsList = (): Promise<Account> => {
  const loadAccounts = useStore((store) => store.getAccountsList);

  return axios
    .get(import.meta.env.VITE_API + "account")
    .then((res) => {
      loadAccounts(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error("axios error", error);
    });
};
