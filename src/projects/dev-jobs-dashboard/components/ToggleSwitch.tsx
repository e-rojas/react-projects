import React from 'react';
import { HiMoon } from 'react-icons/hi';
import { BsFillSunFill } from 'react-icons/bs';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
interface ToggleSwitchProps {
  theme: string;
  toggleTheme: () => void;
}
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ theme, toggleTheme }) => {
  return (
    <div className='toggle__wrapper'>
      <BsFillSunFill className='m-r' />
      <Toggle
        className='custom-classname'
        defaultChecked={theme === 'dark'}
        icons={false}
        onChange={toggleTheme}
      />
      <HiMoon className='m-l' />
    </div>
  );
};

export default ToggleSwitch;
