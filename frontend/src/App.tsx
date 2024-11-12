import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Route>
    )
  );
  return (
    <div className="font-inter">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
