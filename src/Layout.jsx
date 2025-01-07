import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewsBar from './components/NewsBar';

const Layout = () => {
  return (
    <div className="Layout">
      <NavBar />
      <div className="Page">
        <Outlet />
      </div>
      <NewsBar />
    </div>
  );
};

export default Layout;