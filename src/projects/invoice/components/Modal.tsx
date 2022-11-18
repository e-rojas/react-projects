import React from 'react';
import { GoBackButton } from './Buttons';

interface Props {
  visible: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
}
const Modal: React.FC<Props> = ({ visible, title, children, setVisible }) => {
  return (
    <section
      className={`invoice-application-modal ${visible ? 'active' : 'inactive'}`}
    >
      <div className='invoice-application-modal__container'>
        <GoBackButton
          handleOnClick={() => setVisible && setVisible(false)}
          title='Go back'
        />
        <h1>{title} </h1>
        {children}
      </div>
    </section>
  );
};

export default Modal;
