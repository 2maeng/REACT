import { Outlet } from 'react-router-dom';
import BasicFooter from './Footer/Footer';
import BasicHeader from './Header/Header';

function Layout() {
  return (
    <>
      <BasicHeader />
      <Outlet />
      <BasicFooter />
    </>
  );
}
export default Layout;
