// React
import { useState } from "react";

// Zustand Store
import { useStore } from "@/store";

// Dependencies > Carbon Icons
import { TrashCan } from "@carbon/icons-react";

// Services > API
import { addAccount } from "@/services/api/AccountsAPI";

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
  // const addAccount = useStore((store) => store.addAccount);
  const deleteAccount = useStore((store) => store.deleteAccount);

  const account12 = {
    accountName: "Account 12",
    openingDate: "01/07/2023",
    IBAN: "DE00112234",
    accountType: "Savings",
    name: "Ferdinand",
    surname1: "R",
    surname2: "F",
    street: "P Strasse",
    city: "Berlin",
    code: "B987",
    entity: "N26",
    branch: "N26 Bank AG",
    bankStreet: "GM",
    bankCity: "BCN",
    bankCode: "08080",
    initialBalance: 462,
    currentBalance: 778,
  };

  console.log("account12", account12);

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
                  <TrashCan />
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
          // addAccount(text);
          // addAccount(account12);
          postAccount(account12);
          setText("");
        }}
      >
        Submit
      </button>
    </>
  );
};

export default AccountsMenu;
