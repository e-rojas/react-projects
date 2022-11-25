import React from 'react';

import Sidebar from './components/Bar';
import { Invoice } from './models/Invoice.interface';
import Modal from './components/Modal';
import InvoiceForm from './components/InvoiceForm';
import data from './data.json';
import './styles.css';

import { InvoiceState, filteredInvoices } from './utils';
import InvoicePage from './pages/Invoice.page';
import InvoiceDetail from './pages/InvoiceDetail';
import { Route, Routes } from 'react-router-dom';
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
  }, [filterByStatus, invoices]);

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
        <Routes>
          <Route
            path='/'
            element={
              <InvoicePage
                setFilterByStatus={setFilterByStatus}
                totalInvoices={totalInvoices}
                setVisible={setVisible}
                invoices={invoices}
                filterByStatus={filterByStatus}
              />
            }
          />
          <Route path='/:id' element={<InvoiceDetail />} />
        </Routes>
      </div>
    </>
  );
};

export default InvoiceAppProject;
