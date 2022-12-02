import React from 'react';
import NoInvoices from '../components/NoInvoices';
import InvoicesHeader from '../components/InvoicesHeader';
import { middlewareFilteredInvoices } from '../utils';
import InvoiceCard from '../components/InvoiceCard';
import { InvoicesContext } from '../state';

interface Props {
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
  setVisible,
  filterByStatus,
}) => {
  const { invoices } = React.useContext(InvoicesContext);

  return (
    <div className='w-100 p'>
      <InvoicesHeader
        setFilterByStatus={setFilterByStatus}
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
