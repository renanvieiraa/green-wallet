import { routes } from "constans";
import { Route, Routes } from "react-router-dom";
import Home from "./features/Home/Home";

function RoutesApp() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}></Route>
      ))}
      <Route path={"*"} element={<Home />} />
    </Routes>
  );
}

export default RoutesApp;
