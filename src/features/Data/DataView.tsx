import SectionHeader from "@/components/SectionHeader/SectionHeader"
import { Outlet } from "@tanstack/react-router";

const Data = () => {
  return (
    <>
      <SectionHeader title="Data" />
      <Outlet />
    </>
  );
};

export default Data;
