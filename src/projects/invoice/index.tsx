import React from 'react';
import { DefaultButton } from './components/Buttons';
import './styles.css';
const InvoiceAppProject: React.FC = () => {
  return (
    <div className='w-100  vh-100 '>
      <h1>Invoice App</h1>
      <DefaultButton title='New Invoice' iconDisplay={false} />
    </div>
  );
};

export default InvoiceAppProject;
