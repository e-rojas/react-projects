import React from 'react';
import { useLocation } from 'react-router-dom';

const InvoiceDetail: React.FC = () => {
  const location = useLocation();
  return (
    <div className='w-100 h-100'>
      <h1>Invoice Detail</h1>
      <p>{location.pathname}</p>
    </div>
  );
};

export default InvoiceDetail;
