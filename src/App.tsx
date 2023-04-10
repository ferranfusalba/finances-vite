import GlobalStyle from "./globalStyles";
import TabBar from "./components/TabBar/TabBar";
import { Outlet, RouterProvider } from "@tanstack/react-router";
import { router } from "./router/router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router}>
        <Outlet />
        <TabBar />
      </RouterProvider>
    </>
  );
}

export default App;
