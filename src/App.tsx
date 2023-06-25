import GlobalStyle from "./globalStyles";
import TabBar from "./components/TabBar/TabBar";
import { RouterProvider } from "@tanstack/router";

import { router } from "./routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
