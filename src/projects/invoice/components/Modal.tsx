import { chain } from 'lodash';
import React from 'react';
import { DefaultButton } from './Buttons';

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  children: React.ReactNode;
}
const Modal: React.FC<Props> = ({ visible, title, setVisible, children }) => {
  return (
    <section
      className={`invoice-application-modal ${visible ? 'active' : 'inactive'}`}
    >
      <div className='invoice-application-modal__container'>
        <h1>{title} </h1>
        {children}
        {/* <div className='invoice-application-modal__container__footer'>
          <DefaultButton
            title='Discard'
            iconDisplay={false}
            className='btn__edit'
            handleOnClick={() => {
              setVisible(false);
            }}
          />

          <DefaultButton
            title='Save as Draft'
            iconDisplay={false}
            className='btn__draft'
          />
          <DefaultButton title='Save & Send' iconDisplay={false} />
        </div> */}
      </div>
    </section>
  );
};

export default Modal;
