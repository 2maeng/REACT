import AuthProvider from 'contexts/auth';
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import HomePage from './pages/Home';

import Homepage from './pages/Home';
import { TodoPage } from './pages/Todo';
import router from './routes/routing';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </AuthProvider>

      {/* <BrowserRouter>
        HTML5를 지원하는 브라우저 주소를 감지
        <Routes>
        Route path와 감지한 주소가 일치한 router만을 렌더링 시켜주는 역할
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </BrowserRouter> */}
    </ThemeProvider>
  );
}
export default App;
