import React from 'react';

import InvoiceCard from './components/InvoiceCard';
import Sidebar from './components/Bar';
import { Invoice } from './models/Invoice.interface';
import Modal from './components/Modal';
import InvoiceForm from './components/InvoiceForm';
import data from './data.json';
import './styles.css';
import NoInvoices from './components/NoInvoices';
import InvoicesHeader from './components/InvoicesHeader';
import { InvoiceState } from './utils';
const InvoiceAppProject: React.FC = () => {
  const [visible, setVisible] = React.useState(true);
  const invoiceData = data as Invoice[];
  const [themeColor, setThemeColor] = React.useState('');
  const [invoices, setInvoices] = React.useState<Invoice[]>([]);
  /* New Invoice State */
  const [newInvoice, setNewInvoice] = React.useState<Invoice>({
    ...new InvoiceState(),
  });

  React.useEffect(() => {
    setThemeColor('invoice-light');
    setInvoices(invoiceData);
  }, [invoiceData, setInvoices]);

  return (
    <>
      <div className='invoice-application' data-invoice-color={themeColor}>
        <Modal visible={visible} setVisible={setVisible} title='New Invoice'>
          <InvoiceForm
            visible={visible}
            setVisible={setVisible}
            newInvoice={newInvoice}
            setNewInvoice={setNewInvoice}
            invoices={invoices}
            setInvoices={setInvoices}
          />
        </Modal>
        <Sidebar theme={themeColor} setThemeColor={setThemeColor} />
        <div className='w-100 p'>
          <InvoicesHeader />
          <br />
          <div className='invoice-card__container'>
            {invoices && invoices.length > 0 ? (
              invoices.map((invoice) => (
                <InvoiceCard key={invoice.id} invoice={invoice} />
              ))
            ) : (
              <NoInvoices />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceAppProject;
