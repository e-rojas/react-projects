import React from 'react';
import {
  COffcanvas,
  COffcanvasHeader,
  CCloseButton,
  COffcanvasBody,
} from '@coreui/react';
import { NavLink } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css';

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const OffCanvas: React.FC<Props> = ({ visible, setVisible }) => {
  return (
    <COffcanvas
      placement='start'
      visible={visible}
      onHide={() => setVisible(false)}
    >
      <COffcanvasHeader>
        <CCloseButton
          className='text-reset'
          onClick={() => setVisible(false)}
        />
      </COffcanvasHeader>
      <COffcanvasBody>
        <nav>
          <ul>
            <li>
              <NavLink onClick={() => setVisible(false)} to='/' end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setVisible(false)} to='projects'>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setVisible(false)} to='about'>
                About
              </NavLink>
            </li>
            <div className='p-l bg-soft-gray rounded p'>
              <h5>Live Projects</h5>
              <ul>
                <li>
                  <NavLink
                    onClick={() => setVisible(false)}
                    to='/dev-jobs-dashboard'
                  >
                    Dev Jobs Posting
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setVisible(false)}
                    to='projects/pomodoro'
                  >
                    Pomodoro App
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </nav>
      </COffcanvasBody>
    </COffcanvas>
  );
};

export default OffCanvas;
