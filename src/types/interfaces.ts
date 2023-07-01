export interface Task {
  title: string;
  status: string;
}

export interface Account {
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
    address: {
      street: string;
      city: string;
      code: string;
    };
  };
  bank: {
    entity: string;
    branch: string;
    bankAddress: {
      street: string;
      city: string;
      code: string;
    };
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
  deleteAccount: (title: string) => void;
  deleteTask: (title: string, state: string) => void;
  draggedTask: (title: string) => void;
  moveTask: (title: string, state: string) => void;
  setDraggedTask: (title: string) => void;
  tasks: Array<Task>;
}
