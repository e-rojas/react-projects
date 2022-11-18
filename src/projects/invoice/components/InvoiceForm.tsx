import React from 'react';
import { DefaultButton, RemoveItemButton } from './Buttons';
import SmartInput from './SmartInput';
interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
const InvoiceForm: React.FC<Props> = ({ visible, setVisible }) => {
  return (
    <div className='invoice-form'>
      <div className='invoice-form__body w-100 '>
        <h3 className='invoice-form__body__title'>Bill From</h3>
        <SmartInput
          labelTitle='Street Address'
          type='text'
          name='streetAddress'
          value=''
          onchange={() => {}}
        />
        <div className=' invoice-form__input__wrapper'>
          <SmartInput
            labelTitle='City'
            type='text'
            name='city'
            value=''
            onchange={() => {}}
            className='city-input'
          />
          <SmartInput
            labelTitle='Post Code'
            type='text'
            name='postCode'
            value=''
            onchange={() => {}}
            className='post-code-input'
          />
          <SmartInput
            labelTitle='Country'
            type='text'
            name='country'
            value=''
            onchange={() => {}}
            className='country-input'
          />
        </div>
        <h3 className='invoice-form__body__title'>Bill To</h3>
        <SmartInput
          labelTitle={`Client's Name`}
          type='text'
          name='clientName'
          value=''
          onchange={() => {}}
          className='w-100'
        />
        <SmartInput
          labelTitle='Client Email'
          type='email'
          name='clientEmail'
          value=''
          onchange={() => {}}
          className='w-100'
        />
        <SmartInput
          labelTitle='Street Address'
          type='text'
          name='streetAddress'
          value=''
          onchange={() => {}}
          className='w-100'
        />
        <div className=' invoice-form__input__wrapper'>
          <SmartInput
            labelTitle='City'
            type='text'
            name='city'
            value=''
            onchange={() => {}}
            className='city-input'
          />
          <SmartInput
            labelTitle='Post Code'
            type='text'
            name='postCode'
            value=''
            onchange={() => {}}
            className='post-code-input'
          />
          <SmartInput
            labelTitle='Country'
            type='text'
            name='country'
            value=''
            onchange={() => {}}
            className='country-input'
          />
        </div>

        <div className='invoice-form__input__wrapper'>
          <SmartInput
            labelTitle='Issue Date'
            type='date'
            name='issueDate'
            value=''
            onchange={() => {}}
            className='date-input'
          />
          <SmartInput
            labelTitle='Payment Terms'
            type='select'
            name='paymentTerms'
            value=''
            onchange={() => {}}
            className='select-input'
          />
        </div>
        <SmartInput
          labelTitle='Project Description'
          type='text'
          name='projectDescription'
          value=''
          onchange={() => {}}
          className='w-100'
        />
        <div className='invoice-form__items'>
          <h1 className='invoice-form__items__title'>Item List</h1>
          <div className='invoice-form__input__wrapper'>
            <SmartInput
              labelTitle='Item Name'
              type='text'
              name='itemName'
              value='Web Design'
              onchange={() => {}}
              className='item-name-input'
            />
            <SmartInput
              labelTitle='Qty.'
              type='number'
              name='qty'
              value=''
              onchange={() => {}}
              className='item-quantity-input'
            />
            <SmartInput
              labelTitle='Price'
              type='number'
              name='price'
              value='234.88'
              onchange={() => {}}
              className='item-price-input'
            />
            <SmartInput
              labelTitle='Total'
              type='number'
              name='total'
              value='234.88'
              onchange={() => {}}
              className='item-total-input read-only'
            />
            <div className='remove-item-button center'>
              <RemoveItemButton handleOnClick={() => {}} title='' />
            </div>
          </div>
        </div>
      </div>

      <div className='invoice-form__footer'>
        <DefaultButton
          title='Discard'
          iconDisplay={false}
          className='btn__edit'
          handleOnClick={() => {
            setVisible(false);
          }}
        />

        <DefaultButton
          title='Save as Draft'
          iconDisplay={false}
          className='btn__draft'
        />
        <DefaultButton title='Save & Send' iconDisplay={false} />
      </div>
    </div>
  );
};

export default InvoiceForm;
