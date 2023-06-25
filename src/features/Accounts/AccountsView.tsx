// Dependencies > TanStack Router
import { Outlet } from "@tanstack/react-router";

// Components
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const Accounts = () => {
  return (
    <>
      <SectionHeader title="Accounts" />
      <Outlet />
    </>
  );
};

export default Accounts;
