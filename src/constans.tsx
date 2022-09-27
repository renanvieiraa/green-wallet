import Home from "features/Home/Home";
import OperationList from "features/OperationList/OperationList";
import { RouterConfig } from "models/routes";

export const routes: RouterConfig[] = [
  {
    routeName: "Página inicial",
    path: "/",
    element: <Home />,
  },
  {
    routeName: "Lista de transações",
    path: "/operation-list",
    element: <OperationList />,
  },
];
