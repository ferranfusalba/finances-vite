// Dependencies > TanStack Router
import { Outlet } from "@tanstack/react-router";

// Components
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import AccountsMenu from "@/components/AccountsMenu/AccountsMenu";

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
