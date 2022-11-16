import React from 'react';
import { DefaultButton } from './Buttons';

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const InvoiceForm: React.FC<Props> = ({ visible, setVisible }) => {
  return (
    <div className='invoice-form'>
      <h1>Invoice Form</h1>
      <div className='invoice-form__footer'>
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
      </div>
    </div>
  );
};

export default InvoiceForm;
