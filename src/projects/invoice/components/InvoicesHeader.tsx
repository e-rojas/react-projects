import React from 'react';
import { DefaultButton } from './Buttons';
const InvoicesHeader: React.FC = () => {
  return (
    <header className='invoices-header'>
      <div className='invoices-header__info__wrapper'>
        <div className='invoices-header__title'>
          <h1>Invoices</h1>
        </div>
        <div className='invoices-header__total'>
          <span>there are 7 total invoices</span>
        </div>
      </div>
      <div className='invoices-header__filter__wrapper'>
        <div className='invoices-header__filter'>
          <div className='dropdown'>
            <button className='dropbtn'>Filter By Status</button>
            <div className='dropdown-content'>
              <label htmlFor='paid' className='checkbox-container'>
                Paid
                <input type='checkbox' id='paid' />
                <span className='checkbox-checkmark'></span>
              </label>
              <label htmlFor='pending' className='checkbox-container'>
                Pending
                <input type='checkbox' id='pending' />
                <span className='checkbox-checkmark'></span>
              </label>
              <label htmlFor='draft' className='checkbox-container'>
                Draft
                <input type='checkbox' id='draft' />
                <span className='checkbox-checkmark'></span>
              </label>
            </div>
          </div>
        </div>
        <DefaultButton
          iconDisplay={true}
          title='New'
          handleOnClick={() => {}}
        />
      </div>
    </header>
  );
};

export default InvoicesHeader;
