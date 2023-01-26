import { HomeOutlined as HomeIcon, Paid } from '@mui/icons-material';
import Home from 'features/Home/Home';
import OperationList from 'features/OperationList/OperationList';
import { RouterConfig } from 'models/routes';

export const routes: RouterConfig[] = [
  {
    routeName: 'Página inicial',
    icon: <HomeIcon />,
    path: '/',
    element: <Home />,
  },
  {
    routeName: 'Lista de transações',
    icon: <Paid />,
    path: '/operation-list',
    element: <OperationList />,
  },
];
