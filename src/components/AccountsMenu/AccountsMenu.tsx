// React
import { useState } from "react";

// Zustand Store
import { useStore } from "@/store";

// Routes
import { router } from "@/router/router";

// Domain
import {
  StyledAccountsMenu,
  StyledAccountButton,
  StyledButtonArea,
  StyledScrollArea,
} from "./StyledAccountsMenu";

const AccountsMenu = () => {
  const [text, setText] = useState("");
  const accounts = useStore((store) => store.accounts);
  const addAccount = useStore((store) => store.addAccount);
  const deleteAccount = useStore((store) => store.deleteAccount);

  return (
    <>
      <StyledAccountsMenu>
        <StyledButtonArea>
          {/* <Button shape={SHAPE.square} onClick={() => setIsOpen(true)}>
            +
          </Button> */}
          <button>Modal</button>
        </StyledButtonArea>
        <StyledScrollArea>
          {accounts.map((account) => (
            <div key={account.id}>
              <StyledAccountButton>
                <router.Link to={"/accounts/" + String(account.id)}>
                  {account.accountName}
                </router.Link>
                <button onClick={() => deleteAccount(account.id)}>
                  Delete
                </button>
              </StyledAccountButton>
            </div>
          ))}
        </StyledScrollArea>
      </StyledAccountsMenu>

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
    </>
  );
};

export default AccountsMenu;
