import Layout from 'components/Layout';
import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Home';
import TodoPage from '../pages/Todo';

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
        path: 'todo',
        element: <TodoPage />,
      },
    ],
  },
]);

export default router;
