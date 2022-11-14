import React from 'react';
import { DefaultButton, EditButton } from './components/Buttons';
import './styles.css';
const InvoiceAppProject: React.FC = () => {
  const [themeColor, setThemeColor] = React.useState('');

  React.useEffect(() => {
    setThemeColor('invoice-light');
  }, []);
  return (
    <div className='w-100  vh-100' data-invoice-color={themeColor}>
      <h1>Invoice App</h1>
      <DefaultButton title='New Invoice' iconDisplay={false} />
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
