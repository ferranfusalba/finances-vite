// Dependencies > TanStack Router
import { createReactRouter, createRouteConfig } from "@tanstack/react-router";

// Features > Views
import Account from "@/features/Accounts/children/Account/AccountView";
import Accounts from "@/features/Accounts/AccountsView";
import AccountsIndex from "@/features/Accounts/children/AccountsIndex/AccountsIndexView";
import Budget from "@/features/Budget/BudgetView";
import Data from "@/features/Data/DataView";
import DataGlobal from "@/features/Data/children/DataGlobal/DataGlobalView";
import DataIndex from "@/features/Data/children/DataIndex/DataIndexView";
import DataMonthly from "@/features/Data/children/DataMonthly/DataMonthlyView";
import Home from "@/features/Home/HomeView";
import Settings from "@/features/Settings/SettingsView";

export const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    element: Home(),
  }),
  createRoute({
    path: "/budget",
    element: Budget(),
  }),
  createRoute({
    path: "accounts",
    element: Accounts(),
  }).createChildren((createRoute) => [
    createRoute({ path: "/", element: AccountsIndex() }),
    createRoute({
      path: ":id",
      element: Account(),
    }),
  ]),
  createRoute({
    path: "data",
    element: Data(),
  }).createChildren((createRoute) => [
    createRoute({ path: "/", element: DataIndex() }),
    createRoute({
      path: "/global",
      element: DataGlobal(),
    }),
    createRoute({
      path: "/monthly",
      element: DataMonthly(),
    }),
  ]),
  createRoute({
    path: "/settings",
    element: Settings(),
  }),
]);

export const router = createReactRouter({
  routeConfig,
});
