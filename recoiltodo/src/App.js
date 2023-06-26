import AuthProvider from 'contexts/auth';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import HomePage from './pages/Home';

import Homepage from './pages/Home';
import { TodoPage } from './pages/Todo';
import router from './routes/routing';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  //   {
  //   defaultOptions: {
  //     queries: {
  //       cacheTime:
  //       staleTime:
  //     }
  //   }
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <GlobalStyles />
            <RouterProvider router={router} />
          </AuthProvider>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
export default App;
