import React from 'react';
import ilustration from '../assets/illustration-empty.svg';
const NoInvoices: React.FC = () => {
  return (
    <div className='no-invoices'>
      <img src={ilustration} alt='   ' />
      <h1>There is nothing here</h1>
      <p>
        {' '}
        Create an invoice by clicking the <span>New Invoice</span> button and
        get started
      </p>
    </div>
  );
};

export default NoInvoices;
