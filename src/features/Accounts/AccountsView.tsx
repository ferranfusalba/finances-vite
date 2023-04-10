import SectionHeader from "@/components/SectionHeader/SectionHeader"
import { Outlet } from "@tanstack/react-router";

const Accounts = () => {
  return (
    <>
      <SectionHeader title="Accounts" />
      <Outlet />
    </>
  );
};

export default Accounts;
