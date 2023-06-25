import { Route, Router } from "@tanstack/router";

import { rootRoute } from "./_root";
import Home from "./features/Home/HomeView";
import Budget from "./features/Budget/BudgetView";
import Accounts from "./features/Accounts/AccountsView";
import Data from "./features/Data/DataView";
import Settings from "./features/Settings/SettingsView";

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const budgetRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/budget",
  component: Budget,
});

const accountsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/accounts",
  component: Accounts,
});

const dataRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/data",
  component: Data,
});

const settingsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: Settings,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  budgetRoute,
  accountsRoute,
  dataRoute,
  settingsRoute,
]);

export const router = new Router({
  routeTree,
});

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}
