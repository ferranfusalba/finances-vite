import './App.css'
import TabBar from './components/TabBar/TabBar'
import {
  Outlet,
  RouterProvider
} from '@tanstack/react-router'
import { router } from "./router/router"
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Outlet />
        <TabBar />
      </RouterProvider>
    </div>
  )
}

export default App
