import React from 'react';
import NoInvoices from '../components/NoInvoices';
import InvoicesHeader from '../components/InvoicesHeader';
import { middlewareFilteredInvoices } from '../utils';
import InvoiceCard from '../components/InvoiceCard';
import data from '../data.json';
import { InvoiceActionTypes, InvoicesContext } from '../state';
import { Invoice } from '../models/Invoice.interface';
interface Props {
  setTotalInvoices?: React.Dispatch<React.SetStateAction<number>>;
  totalInvoices: number;
  setFilterByStatus: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;

  filterByStatus: {
    [key: string]: boolean;
  };
}

const InvoicePage: React.FC<Props> = ({
  setFilterByStatus,
  totalInvoices,
  setVisible,
  // invoices,
  filterByStatus,
  setTotalInvoices,
}) => {
  const invoiceData = data as Invoice[];
  const { invoices, dispatch } = React.useContext(InvoicesContext);
  React.useEffect(() => {
    if (invoices.length === 0) {
      dispatch({ type: InvoiceActionTypes.SET_INVOICES, payload: invoiceData });
      console.log('invoices set');
    }
  }, [dispatch, invoices, invoiceData]);

  return (
    <div className='w-100 p'>
      <InvoicesHeader
        setFilterByStatus={setFilterByStatus}
        totalInvoices={totalInvoices}
        setVisible={setVisible}
      />
      <div className='invoice-card__container'>
        {invoices && invoices.length > 0 ? (
          middlewareFilteredInvoices(
            invoices,
            filterByStatus,
            setTotalInvoices
          ).map((invoice) => {
            return <InvoiceCard key={invoice.id} invoice={invoice} />;
          })
        ) : (
          <NoInvoices />
        )}
      </div>
    </div>
  );
};

export default InvoicePage;
