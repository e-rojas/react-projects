import React from 'react';

import Sidebar from './components/Bar';
import { Invoice } from './models/Invoice.interface';
import Modal from './components/Modal';
import InvoiceForm from './components/InvoiceForm';

import './styles.css';

import { InvoiceState } from './utils';
import InvoicePage from './pages/Invoice.page';
import InvoiceDetail from './pages/InvoiceDetail.page';
import { Route, Routes } from 'react-router-dom';
import { InvoicesContext, InvoicesProvider } from './state';
const InvoiceAppProject: React.FC = () => {
  const [visible, setVisible] = React.useState(false);
  const [themeColor, setThemeColor] = React.useState('');

  const [filterByStatus, setFilterByStatus] = React.useState<{
    [key: string]: boolean;
  }>({
    paid: false,
    pending: false,
    draft: false,
  });

  /* New Invoice State */
  const [newInvoice, setNewInvoice] = React.useState<Invoice>({
    ...new InvoiceState(),
  });
  const { invoices } = React.useContext(InvoicesContext);

  React.useEffect(() => {
    setThemeColor('invoice-light');
  }, []);

  return (
    <>
      <InvoicesProvider>
        <div className='invoice-application' data-invoice-color={themeColor}>
          <Modal visible={visible} setVisible={setVisible} title='New Invoice'>
            <InvoiceForm
              visible={visible}
              setVisible={setVisible}
              newInvoice={newInvoice}
              setNewInvoice={setNewInvoice}
              invoices={invoices}
              setInvoices={() => {}}
            />
          </Modal>
          <Sidebar theme={themeColor} setThemeColor={setThemeColor} />
          <Routes>
            <Route
              path='/'
              element={
                <InvoicePage
                  setFilterByStatus={setFilterByStatus}
                  setVisible={setVisible}
                  filterByStatus={filterByStatus}
                />
              }
            />
            <Route path=':id' element={<InvoiceDetail />} />
          </Routes>
        </div>
      </InvoicesProvider>
    </>
  );
};

export default InvoiceAppProject;
