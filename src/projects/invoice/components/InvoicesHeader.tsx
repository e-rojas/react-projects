import React from 'react';
import { Invoice } from '../models/Invoice.interface';
import { InvoicesContext } from '../state';

import { DefaultButton } from './Buttons';

interface Props {
  setFilterByStatus: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean;
    }>
  >;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const InvoicesHeader: React.FC<Props> = ({ setFilterByStatus, setVisible }) => {
  const { invoices } = React.useContext(InvoicesContext);
  const invoiceHeadertitle = (invoices: Invoice[]): string => {
    if (invoices.length === 0) {
      return 'No Invoices';
    } else if (invoices.length === 1) {
      return `there is ${invoices.length} total invoice`;
    } else {
      return `ther are ${invoices.length} total invoices`;
    }
  };
  return (
    <header className='invoices-header'>
      <div className='invoices-header__info__wrapper'>
        <div className='invoices-header__title'>
          <h1>Invoices</h1>
        </div>
        <div className='invoices-header__total'>
          <span>{invoiceHeadertitle(invoices)}</span>
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
