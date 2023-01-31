import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/db-assets/logos/e-logo.png';
import { HiMenuAlt3 } from 'react-icons/hi';
interface Props {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navigation: React.FC<Props> = ({ setVisible }) => {
  return (
    <header className='bg-slate-100 p-4'>
      <nav className='flex flex-row justify-between items-center'>
        <NavLink to='/'>
          <img
            src={logo}
            alt='logo'
            className=' rounded w-36 md:w-40 lg:w-44'
          />
        </NavLink>
        <div className=''>
          <ul className='flex flex-row'>
            <div className='hidden md:flex flex-row'>
              <li className='pr-3'>
                <NavLink to='/' end>
                  Home
                </NavLink>
              </li>
            </div>
            <li className='pr-3'>
              <HiMenuAlt3
                className='text-3xl md:hidden'
                onClick={() => setVisible(true)}
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
