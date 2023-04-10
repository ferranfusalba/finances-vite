import { createReactRouter, createRouteConfig } from "@tanstack/react-router";

export const routeConfig = createRouteConfig().createChildren((createRoute) => [
  createRoute({
    path: "/",
    element: "Home",
  }),
  createRoute({
    path: "/budget",
    element: "Budget",
  }),
  createRoute({
    path: "accounts",
    element: "Accounts",
  }).createChildren((createRoute) => [
    createRoute({ path: "/", element: "Accounts Index" }),
    createRoute({
      path: ":id",
      element: "Account",
    }),
  ]),
  createRoute({
    path: "data",
    element: "Data",
  }).createChildren((createRoute) => [
    createRoute({ path: "/", element: "Data Index" }),
    createRoute({
      path: "/global",
      element: "Global",
    }),
  ]),
  createRoute({
    path: "/settings",
    element: "Settings",
  }),
]);

export const router = createReactRouter({
  routeConfig,
});
