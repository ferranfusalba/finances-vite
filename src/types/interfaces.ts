export interface Task {
  title: string;
  status: string;
}

interface Address {
  street: string;
  city: string;
  code: string;
}

export interface Account {
  title?: string;
  // TODO: Finish integrating old & new Account interfaces
  id: string;
  accountName: string;
  accountInfo: {
    openingDate: string;
    accountType: string;
    iban: string;
  };
  holder: {
    name: string;
    surname1: string;
    surname2: string;
    address: Address;
  };
  bank: {
    entity: string;
    branch: string;
    bankAddress: Address;
  };
  balance: {
    initialBalance: number;
    currentBalance: number;
  };
}

export interface Store {
  accounts: Array<Account>;
  addAccount: (title: string) => void;
  addTask: (title: string, state: string) => void;
  deleteAccount: (id: string) => void;
  deleteTask: (title: string, state: string) => void;
  draggedTask: (title: string) => void;
  moveTask: (title: string, state: string) => void;
  setDraggedTask: (title: string) => void;
  tasks: Array<Task>;
}
