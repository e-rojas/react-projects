import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Navigation from '../navigation';
import OffCanvas from '../offcanvas';
import '../../styles/layout.css';
const Layout: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  return (
    <main className='layout-main'>
      <OffCanvas visible={visible} setVisible={setVisible} />
      <Navigation setVisible={setVisible} />

      <Outlet />
      <Footer />
    </main>
  );
};

export default Layout;
