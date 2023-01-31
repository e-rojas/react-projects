import React from 'react';
import logo from '../../assets/db-assets/logos/e-logo.png';
const Footer: React.FC = () => {
  return (
    <footer className='border-t-2 border-gray-200 bg-slate-900 text-white py-5 text-center'>
      <img
        src={logo}
        alt='logo'
        width={100}
        className='bg-white  rounded p-1 inline mx-2'
      />
      <p className='inline text-sm'>
        &copy; {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
