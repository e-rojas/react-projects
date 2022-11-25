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
import { InvoiceState, filteredInvoices } from './utils';
const InvoiceAppProject: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const invoiceData = data as Invoice[];
  const [themeColor, setThemeColor] = React.useState('');
  const [invoices, setInvoices] = React.useState<Invoice[]>([]);
  const [filterByStatus, setFilterByStatus] = React.useState<{
    [key: string]: boolean;
  }>({
    paid: false,
    pending: false,
    draft: false,
  });
  const [totalInvoices, setTotalInvoices] = React.useState(0);
  /* New Invoice State */
  const [newInvoice, setNewInvoice] = React.useState<Invoice>({
    ...new InvoiceState(),
  });

  React.useEffect(() => {
    setThemeColor('invoice-light');
    setInvoices(invoiceData);
  }, [invoiceData, setInvoices]);

  React.useEffect(() => {
    const invoicesFiltered = filteredInvoices(invoices, filterByStatus);
    setTotalInvoices(invoicesFiltered.length);
    // eslint-disable-next-line
  }, [filterByStatus]);

  const middlewareFilteredInvoices = (): Invoice[] => {
    return filteredInvoices(invoices, filterByStatus);
  };

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
          <InvoicesHeader
            setFilterByStatus={setFilterByStatus}
            totalInvoices={totalInvoices}
            setVisible={setVisible}
          />
          <br />
          <div className='invoice-card__container'>
            {invoices && invoices.length > 0 ? (
              middlewareFilteredInvoices().map((invoice) => {
                return <InvoiceCard key={invoice.id} invoice={invoice} />;
              })
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
