import { Route, RouteObject, Routes } from "react-router-dom";
import Home from "./features/Home/Home";
import OperationList from "./features/OperationList/OperationList";

export const routes: (RouteObject & { routerName?: string })[] = [
  {
    routerName: "Página inicial",
    path: "/",
    element: <Home />,
  },
  {
    routerName: "Lista de transações",
    path: "/operation-list",
    element: <OperationList />,
  },
];

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
