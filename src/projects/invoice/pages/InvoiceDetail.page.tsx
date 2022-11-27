import React from 'react';
import { useLocation } from 'react-router-dom';
import { Invoice } from '../models/Invoice.interface';
import { DefaultButton, GoBackButton } from '../components//Buttons';
const InvoiceDetail: React.FC = () => {
  const location = useLocation();
  const { invoice } = location.state as { invoice: Invoice };
  const handleReturnToInvoices = () => {
    window.history.back();
  };
  return (
    <div className='w-100 p invoice-details'>
      <div className='invoice-details__return-button'>
        <GoBackButton title='Go Back' handleOnClick={handleReturnToInvoices} />
      </div>
      <div className='invoice-details__header invoice-card'>
        <div className='invoice-details__header__status-wrapper '>
          <span className='invoice-details__header-status-title'>Status</span>
          <span
            className={`invoice-card__status state-${invoice.status} m-l-1`}
          >
            {invoice.status}
          </span>
        </div>
        <div className='invoice-details__header__buttons-wrapper'>
          {/* edit, delete, mark as paid buttons */}
          <DefaultButton
            title='Edit'
            className='btn__primary btn__edit'
            iconDisplay={false}
          />
          <DefaultButton
            title='Delete'
            className=' btn__warning'
            iconDisplay={false}
          />
          <DefaultButton
            title='Mark as Paid'
            className='btn__primary btn__mark-as-paid'
            iconDisplay={false}
          />
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetail;
