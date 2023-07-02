// React
import { useState } from "react";

// Zustand Store
import { useStore } from "@/store";

// Dependencies > Carbon Icons
import { AddAlt, TrashCan } from "@carbon/icons-react";

// Types
import { Account } from "@/types/interfaces";

// Routes
import { router } from "@/router/router";

// Domain
import {
  StyledAccountsMenu,
  StyledAccountButton,
  StyledAddAccountButtonWrapper,
  StyledAccountsListWrapper,
} from "./StyledAccountsMenu";

const AccountsMenu = () => {
  const [text, setText] = useState("");
  const accounts = useStore((store) => store.accounts);
  const addAccount = useStore((store) => store.addAccount);
  const deleteAccount = useStore((store) => store.deleteAccount);

  return (
    <>
      <StyledAccountsMenu>
        <StyledAddAccountButtonWrapper>
          <StyledAccountButton>
            <AddAlt />
          </StyledAccountButton>
        </StyledAddAccountButtonWrapper>
        <StyledAccountsListWrapper>
          {accounts.map((account: Account) => (
            <div key={account.id}>
              <StyledAccountButton>
                <router.Link to={"/accounts/" + String(account.id)}>
                  {account.accountName}
                </router.Link>
                <button onClick={() => deleteAccount(account.id)}>
                  <TrashCan />
                </button>
              </StyledAccountButton>
            </div>
          ))}
        </StyledAccountsListWrapper>
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
