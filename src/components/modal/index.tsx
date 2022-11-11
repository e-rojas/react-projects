import React from 'react';
import Delay from '../Delay.animation';
import '../../styles/Modal.css';
interface Props {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  visible: boolean;
}

const Modal: React.FC<Props> = ({ setVisible, visible }) => {
  if (!visible) {
    return null;
  }
  return (
    <div className={`modal ${visible ? 'enter-done' : 'exit'}`}>
      <Delay delay={500}>
        <div className='modal-content'>
          <div className='modal-header'>
            <h2 className='modal-title'>Modal Title</h2>
          </div>
          <div className='modal-body'>
            <p>Modal body text goes here.</p>
          </div>
          <div className='modal-footer '>
            <button
              onClick={() => setVisible(false)}
              className='_btn absolute-bottom-edge-position '
            >
              Apply
            </button>
          </div>
        </div>
      </Delay>
    </div>
  );
};

export default Modal;
