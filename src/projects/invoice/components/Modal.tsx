import React from 'react';

interface Props {
  visible: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
}
const Modal: React.FC<Props> = ({ visible, title, children }) => {
  return (
    <section
      className={`invoice-application-modal ${visible ? 'active' : 'inactive'}`}
    >
      <div className='invoice-application-modal__container'>
        <h1>{title} </h1>
        {children}
      </div>
    </section>
  );
};

export default Modal;
