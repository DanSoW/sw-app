import { FC } from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

import useRoutes from "@routes/routes";

import styles from "./App.module.css";

const App: FC<any> = () => {
  const routes = useRoutes();

  return (
    <>
      <BrowserRouter>
      <NavLink to={"/"}>Home Page</NavLink>
      <NavLink to={"/people"}>People Page</NavLink>
      {routes}
      </BrowserRouter>
    </>
  );
};

export default App;
