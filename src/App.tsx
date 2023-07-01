// Core
import GlobalStyle from "./globalStyles";

// Dependencies > TanStack Router
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Outlet, RouterProvider } from "@tanstack/react-router";

// Services > API
import { initStoreAPIData } from "@/services/api/AccountsAPI";

// Routes
import { router } from "./router/router";

// Components
import TabBar from "./components/TabBar/TabBar";

function App() {
  // Load all necessary init data to Zustand Store
  initStoreAPIData();

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
