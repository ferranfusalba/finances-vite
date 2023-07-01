// React
import { useState } from "react";

// Zustand Store
import { useStore } from "@/store";

// Dependencies > TanStack Router
import { Outlet } from "@tanstack/react-router";

// Components
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const AccountsMenu = () => {
  const [text, setText] = useState("");
  const accounts = useStore((store) => store.accounts);
  const addAccount = useStore((store) => store.addAccount);
  const deleteAccount = useStore((store) => store.deleteAccount);

  return (
    <>
      <SectionHeader title="Accounts Menu" />
      <hr />
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        onClick={() => {
          addAccount(text);
          setText("");
        }}
      >
        Submit
      </button>
      <br />
      <small>Accounts List:</small>
      {accounts.map((account: { id: string }) => (
        <div key={account.id}>
          <p>{account.accountName}</p>
          <small onClick={() => deleteAccount(account.id)}>X</small>
        </div>
      ))}
    </>
  );
};

const Accounts = () => {
  return (
    <>
      <SectionHeader title="Accounts" />
      <AccountsMenu />
      <hr />
      <Outlet />
    </>
  );
};

export default Accounts;
