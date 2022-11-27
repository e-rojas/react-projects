import React from 'react';
import { GoChevronRight } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { Invoice } from '../models/Invoice.interface';
import { formatDueDate } from '../utils';
interface Props {
  invoice: Invoice;
}

const InvoiceCard: React.FC<Props> = ({ invoice }) => {
  return (
    <Link
      state={{ invoice }}
      to={`/projects/invoice/${invoice.id}`}
      className='no-decoration-link'
    >
      <div className='invoice-card'>
        <div className='invoice-card__item-id'>
          <span className='invoice-card__id'>{invoice.id} </span>
        </div>
        <div className='invoice-card__item-date'>
          <span className='invoice-card__date'>
            {formatDueDate(invoice.createdAt, 'Due')}
          </span>
        </div>
        <div className='invoice-card__item-client'>
          <span className='invoice-card__client'>{invoice.clientName}</span>
        </div>
        <div className='invoice-card__item-total'>
          <span className='invoice-card__total'>{invoice.total}</span>
        </div>
        <div className='invoice-card__item-status'>
          <div className='invoice-card__status__wrapper'>
            <span className={`invoice-card__status state-${invoice.status}`}>
              {invoice.status}
            </span>
            <GoChevronRight className='invoice-card-chevron' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default InvoiceCard;
