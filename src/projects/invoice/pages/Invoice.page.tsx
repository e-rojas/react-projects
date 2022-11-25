import React from 'react';
import { Invoice } from '../models/Invoice.interface';
import NoInvoices from '../components/NoInvoices';
import InvoicesHeader from '../components/InvoicesHeader';
import { middlewareFilteredInvoices } from '../utils';
import InvoiceCard from '../components/InvoiceCard';
interface Props {
  totalInvoices: number;
  setFilterByStatus: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  invoices: Invoice[];
  filterByStatus: {
    [key: string]: boolean;
  };
}

const InvoicePage: React.FC<Props> = ({
  setFilterByStatus,
  totalInvoices,
  setVisible,
  invoices,
  filterByStatus,
}) => {
  return (
    <div className='w-100 p'>
      <InvoicesHeader
        setFilterByStatus={setFilterByStatus}
        totalInvoices={totalInvoices}
        setVisible={setVisible}
      />
      <div className='invoice-card__container'>
        {invoices && invoices.length > 0 ? (
          middlewareFilteredInvoices(invoices, filterByStatus).map(
            (invoice) => {
              return <InvoiceCard key={invoice.id} invoice={invoice} />;
            }
          )
        ) : (
          <NoInvoices />
        )}
      </div>
    </div>
  );
};

export default InvoicePage;
