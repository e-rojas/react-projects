import React from 'react';
import { useLocation } from 'react-router-dom';
import { Invoice } from '../models/Invoice.interface';
import { DefaultButton, GoBackButton } from '../components//Buttons';

import { InvoiceActionTypes, InvoicesContext } from '../state';
const InvoiceDetail: React.FC = () => {
  const location = useLocation();
  const {
    invoice: { id },
  } = location.state as { invoice: Invoice };
  const { dispatch, invoices } = React.useContext(InvoicesContext);
  const [invoice, setInvoice] = React.useState<Invoice | null>(null);

  React.useEffect(() => {
    const invoice = invoices.find((invoice) => invoice.id === id);
    invoice && setInvoice(invoice);
  }, [id, invoices]);

  const handleReturnToInvoices = () => {
    window.history.back();
  };
  if (!invoice) {
    return <div>Invoice not found</div>;
  }

  const handleMarkAsPaid = () => {
    const updatedInvoice = { ...invoice, status: 'paid' };
    dispatch({
      type: InvoiceActionTypes.UPDATE_INVOICE,
      payload: updatedInvoice,
    });
    // updateInvoice(updatedInvoice);
  };
  return (
    <>
      <div className='w-100 p invoice-details'>
        <div className='invoice-details__return-button'>
          <GoBackButton
            title='Go Back'
            handleOnClick={handleReturnToInvoices}
          />
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
              className={`btn__primary ${invoice.status === 'paid' && 'hide'}`}
              iconDisplay={false}
              handleOnClick={handleMarkAsPaid}
            />
          </div>
        </div>
        <div className=' invoice-card p-0'>
          <div className='invoice-details__body'>
            <div className='invoice-details__body-id'>
              <span className='invoice-card__id'>{invoice.id} </span>

              <span className='invoice-blue-color-pattern'>
                {invoice.description}
              </span>
            </div>
            <div className='invoice-details__body-sender-address invoice-blue-color-pattern'>
              <span>{invoice.senderAddress.street} </span>
              <span>{invoice.senderAddress.city} </span>
              <span>{invoice.senderAddress.postCode} </span>
              <span>{invoice.senderAddress.country} </span>
            </div>
            <div className='invoice-details__body-date'>
              <div className='invoice-details__body-created w-100'>
                <span className='invoice-details__body-created-title invoice-blue-color-pattern'>
                  Invoice Date
                </span>
                <span className='invoice-details__body-created-date'>
                  {new Date(invoice.createdAt).toLocaleDateString('en-UK', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className='invoice-details__body-due w-100'>
                <span className='invoice-details__body-due-title invoice-blue-color-pattern'>
                  Payment Due
                </span>
                <span className='invoice-details__body-due-date'>
                  {new Date(invoice.paymentDue).toLocaleDateString('en-UK', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
            </div>
            <div className='invoice-details__body-receiver'>
              <span className='invoice-details__body-receiver-title invoice-blue-color-pattern'>
                Bill To
              </span>
              <span className='invoice-details__body-receiver-name'>
                {invoice.clientName}
              </span>
              <div className='invoice-details__body-receiver-address invoice-blue-color-pattern'>
                <span> {invoice.clientAddress.street}</span>
                <span> {invoice.clientAddress.city}</span>
                <span> {invoice.clientAddress.postCode}</span>
                <span> {invoice.clientAddress.country}</span>
              </div>
            </div>
            <div className='invoice-details__body-receiverEmail'>
              <span className='invoice-details__body-receiverEmail-title invoice-blue-color-pattern'>
                Sent to
              </span>
              <span className='invoice-details__body-receiverEmail-address'>
                {invoice.clientEmail}
              </span>
            </div>
          </div>
          <div className='invoice-details__body-items'>
            <div>
              <table className='w-100'>
                <thead>
                  <tr>
                    <th className='invoice-blue-color-pattern'>Item Name</th>
                    <th className='invoice-blue-color-pattern'>QTY.</th>
                    <th className='invoice-blue-color-pattern text-center'>
                      Price
                    </th>
                    <th className='invoice-blue-color-pattern text-right'>
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items &&
                    invoice.items.map((item) => (
                      <tr key={item.id}>
                        <td className='invoice-primary-color-pattern'>
                          {item.name}
                        </td>
                        <td className='invoice-blue-color-pattern'>
                          {item.quantity}
                        </td>
                        <td className='invoice-blue-color-pattern text-center'>
                          {item.price}
                        </td>
                        <td className='invoice-primary-color-pattern text-right'>
                          {`£${item.total}`}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className='invoice-details__body-total'>
            <span>Amount Due</span>
            <span>{`£${invoice.total}`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetail;
