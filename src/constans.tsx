import { HomeOutlined as HomeIcon, Paid } from "@mui/icons-material";
import Home from "features/Home/Home";
import OperationCrud from "features/OperationCrud/OperationCrud";
import OperationList from "features/OperationList/OperationList";
import { RouterConfig } from "models/routes";

export const routes: RouterConfig[] = [
  {
    routeName: "Página inicial",
    icon: <HomeIcon />,
    path: "/",
    element: <Home />,
  },
  {
    routeName: "Lista de transações",
    icon: <Paid />,
    path: "/operation-list",
    element: <OperationList />,
  },
  {
    routeName: "Transação",
    icon: <Paid />,
    path: "/operation-crud",
    element: <OperationCrud />,
  },
];
