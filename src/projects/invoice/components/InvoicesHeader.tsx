import React from 'react';

import { DefaultButton } from './Buttons';

interface Props {
  totalInvoices: number;
  setFilterByStatus: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const InvoicesHeader: React.FC<Props> = ({
  setFilterByStatus,
  totalInvoices,
  setVisible,
}) => {
  const invoiceHeadertitle = (totalInvoices: number): string => {
    if (totalInvoices === 0) {
      return 'No Invoices';
    } else if (totalInvoices === 1) {
      return `there is ${totalInvoices} total invoice`;
    } else {
      return `ther are ${totalInvoices} total invoices`;
    }
  };
  return (
    <header className='invoices-header'>
      <div className='invoices-header__info__wrapper'>
        <div className='invoices-header__title'>
          <h1>Invoices</h1>
        </div>
        <div className='invoices-header__total'>
          <span>{invoiceHeadertitle(totalInvoices)}</span>
        </div>
      </div>
      <div className='invoices-header__filter__wrapper'>
        <div className='invoices-header__filter'>
          <div className='dropdown'>
            <button className='dropbtn'>Filter By Status</button>
            <div className='dropdown-content'>
              <label htmlFor='paid' className='checkbox-container'>
                Paid
                <input
                  type='checkbox'
                  id='paid'
                  onClick={(e) => {
                    const target = e.target as HTMLInputElement;
                    setFilterByStatus((prevState) => ({
                      ...prevState,
                      paid: target.checked,
                    }));
                  }}
                />
                <span className='checkbox-checkmark'></span>
              </label>
              <label htmlFor='pending' className='checkbox-container'>
                Pending
                <input
                  onClick={(e) => {
                    const target = e.target as HTMLInputElement;
                    setFilterByStatus((prevState) => ({
                      ...prevState,
                      pending: target.checked,
                    }));
                  }}
                  type='checkbox'
                  id='pending'
                />
                <span className='checkbox-checkmark'></span>
              </label>
              <label htmlFor='draft' className='checkbox-container'>
                Draft
                <input
                  onClick={(e) => {
                    const target = e.target as HTMLInputElement;
                    setFilterByStatus((prevState) => ({
                      ...prevState,
                      draft: target.checked,
                    }));
                  }}
                  type='checkbox'
                  id='draft'
                />
                <span className='checkbox-checkmark'></span>
              </label>
            </div>
          </div>
        </div>
        <DefaultButton
          iconDisplay={true}
          title='New'
          handleOnClick={() => {
            setVisible(true);
          }}
        />
      </div>
    </header>
  );
};

export default InvoicesHeader;
