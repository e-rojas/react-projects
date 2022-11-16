import React from 'react';

import InvoiceCard from './components/InvoiceCard';
import Sidebar from './components/Bar';
import { Invoice } from './models/Invoice.interface';
import data from './data.json';
import './styles.css';
const InvoiceAppProject: React.FC = () => {
  const invoiceData = data as Invoice[];
  const [themeColor, setThemeColor] = React.useState('');
  const [invoices, setInvoices] = React.useState<Invoice[] | null>(null);

  React.useEffect(() => {
    setThemeColor('invoice-light');
    setInvoices(invoiceData);
  }, [invoiceData]);

  return (
    <div
      className='invoice-application w-100  vh-100  display-desktop'
      data-invoice-color={themeColor}
    >
      <Sidebar theme={themeColor} setThemeColor={setThemeColor} />

      <div className='w-100 p'>
        <h1>Invoice App</h1>
        <br />
        {invoices &&
          invoices.map((invoice) => (
            <InvoiceCard key={invoice.id} invoice={invoice} />
          ))}
      </div>
    </div>
  );
};

export default InvoiceAppProject;
