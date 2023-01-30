import React from 'react';
import { SiLinkedin, SiGithub } from 'react-icons/si';
const Footer: React.FC = () => {
  return (
    <footer className='border-t-2 border-gray-200' style={{ borderWidth: 0 }}>
      <h1>Footer</h1>
    </footer>

    /* {/* <footer className='layout-footer'>
      <div className='flex-spread  p-1'>
        <h1 className='brand'>Web Developer</h1>
        <div>
          <a
            href='https://www.linkedin.com/in/edgar-rojas-developer/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiLinkedin size={27} />
          </a>
          <a
            href='https://github.com/e-rojas'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiGithub size={27} />
          </a>
        </div>
      </div>
      <p className='text-center'>
        copyrigth &copy; {new Date().getFullYear()} Edgar Rojas
      </p>
    </footer> */
  );
};

export default Footer;
