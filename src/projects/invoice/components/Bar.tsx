import React from 'react';
import logo from '../assets/logo.svg';
import avatar from '../assets/image-avatar.jpg';
import { BsFillMoonFill } from 'react-icons/bs';
import { BsSunFill } from 'react-icons/bs';
interface Props {
  theme: string;
  setThemeColor: (value: React.SetStateAction<string>) => void;
}
const Sidebar: React.FC<Props> = ({ theme, setThemeColor }) => {
  return (
    <div className='invoice-sidebar'>
      <div className='invoice-sidebar__logo'>
        <img src={logo} alt='logo' />
        <div className='invoice-sidebar__logo-fill'></div>
      </div>
      <div className='invoice-sidebar__footer '>
        <div className='invoice-sidebar__footer__icon__wrapper'>
          {theme === 'invoice-light' ? (
            <BsFillMoonFill
              onClick={() => setThemeColor('invoice-dark')}
              className='invoice-sidebar__footer-icon'
            />
          ) : (
            <BsSunFill
              onClick={() => setThemeColor('invoice-light')}
              className='invoice-sidebar__footer-icon'
            />
          )}
        </div>

        <div className='invoice-sidebar__footer-avatar'>
          <img src={avatar} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
