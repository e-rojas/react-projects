import React from 'react';

import InvoiceCard from './components/InvoiceCard';
import './styles.css';
const InvoiceAppProject: React.FC = () => {
  const [themeColor, setThemeColor] = React.useState('');

  React.useEffect(() => {
    setThemeColor('invoice-light');
  }, []);
  return (
    <div
      className='invoice-application w-100  vh-100 p'
      data-invoice-color={themeColor}
    >
      <h1>Invoice App</h1>
      <br />
      <InvoiceCard invoice={sample} />
    </div>
  );
};

export default InvoiceAppProject;

const sample = {
  id: 'RT3080',
  createdAt: '2021-08-18',
  paymentDue: '2021-08-19',
  description: 'Re-branding',
  paymentTerms: 1,
  clientName: 'Jensen Huang',
  clientEmail: 'jensenh@mail.com',
  status: 'paid',
  senderAddress: {
    street: '19 Union Terrace',
    city: 'London',
    postCode: 'E1 3EZ',
    country: 'United Kingdom',
  },
  clientAddress: {
    street: '106 Kendell Street',
    city: 'Sharrington',
    postCode: 'NR24 5WQ',
    country: 'United Kingdom',
  },
  items: [
    { name: 'Brand Guidelines', quantity: 1, price: 1800.9, total: 1800.9 },
  ],
  total: 1800.97,
};
