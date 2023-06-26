import Layout from 'components/Layout';
import NotFoundPage from 'pages/404';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home';
import TodoPage from '../pages/Todo';
import PrivateRoute from './private';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: 'todo',
            element: <TodoPage />,
          },
        ]
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
