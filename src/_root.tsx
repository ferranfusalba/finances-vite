import { RootRoute, Outlet } from "@tanstack/router";
import TabBar from "./components/TabBar/TabBar";

export const rootRoute = new RootRoute({
  component: () => (
    <>
      <Outlet />
      <TabBar />
    </>
  ),
});
