// Dependencies > TanStack Router
import { Outlet } from "@tanstack/react-router";

// Components
import SectionHeader from "@/components/SectionHeader/SectionHeader";

const Data = () => {
  return (
    <>
      <SectionHeader title="Data" />
      <Outlet />
    </>
  );
};

export default Data;
