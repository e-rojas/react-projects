import React from 'react';
import { DefaultButton, EditButton } from './components/Buttons';
import './styles.css';
const InvoiceAppProject: React.FC = () => {
  const [themeColor, setThemeColor] = React.useState('');

  React.useEffect(() => {
    setThemeColor('invoice-light');
  }, []);
  return (
    <div
      className='invoice-application w-100  vh-100'
      data-invoice-color={themeColor}
    >
      <h1>Invoice App</h1>
      <DefaultButton title='Mark as Paid' iconDisplay={false} />
      <br />
      <DefaultButton title='New Invoice' iconDisplay={true} />
      <br />
      <DefaultButton title='Edit' iconDisplay={false} className='btn__edit' />
      <br />
      <DefaultButton
        title='Delete'
        iconDisplay={false}
        className='btn__warning'
      />
      <br />
      <DefaultButton
        title='Save as Draft'
        iconDisplay={false}
        className='btn__draft'
      />
      <br />
      <EditButton
        title='Edit'
        handleOnClick={() => {
          themeColor === 'invoice-light'
            ? setThemeColor('invoice-dark')
            : setThemeColor('invoice-light');
        }}
      />
    </div>
  );
};

export default InvoiceAppProject;
