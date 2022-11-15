import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Invoice } from '../models/Invoice.interface';
import { formatDueDate } from '../utils';
interface Props {
  invoice: Invoice;
}

const InvoiceCard: React.FC<Props> = ({ invoice }) => {
  return (
    <div className='invoice-card'>
      <span className='invoice-card__id'>{invoice.id} </span>
      <span className='invoice-card__date'>
        {formatDueDate(invoice.createdAt, 'Due')}
      </span>
      <span className='invoice-card__client'>{invoice.clientName}</span>
      <span className='invoice-card__total'>{invoice.total}</span>
      <div className='flex-row-center'>
        <span className={`invoice-card__status state-${invoice.status}`}>
          {invoice.status}
        </span>
        <GoChevronRight className='invoice-card-chevron' />
      </div>
    </div>
  );
};

export default InvoiceCard;
