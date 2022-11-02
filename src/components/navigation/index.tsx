import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
interface Props {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navigation: React.FC<Props> = ({ setVisible }) => {
  return (
    <nav className='navigation'>
      <NavLink to='/'>
        {' '}
        <img
          src='./assets/logos/e-logo.png'
          alt=''
          className='responsive rounded'
        />
      </NavLink>
      <button onClick={() => setVisible(true)} className='menu'>
        <HiMenuAlt3 size={27} />
      </button>
    </nav>
  );
};

export default Navigation;
