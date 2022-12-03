import React from 'react';
import { RemoveItemButton } from './Buttons';
import SmartInput from './SmartInput';
import ItemType from '../models/Item.interface';
interface Props {
  removeItem: (id: string) => void;
  item: ItemType;
  handleInputOnChange: (
    e: React.ChangeEvent<HTMLInputElement> | null,
    key?: string,
    paymentTerms?: number,
    itemID?: string
  ) => void;
}
const Item: React.FC<Props> = ({
  item: { id, name, quantity, price, total },
  removeItem,
  handleInputOnChange,
}) => {
  return (
    <div className='invoice-form__input__wrapper'>
      <SmartInput
        labelTitle='Item Name'
        type='text'
        name='name'
        value={name}
        onchange={(e) => {
          handleInputOnChange(e, 'item', 0, id);
        }}
        className='item-name-input'
      />
      <SmartInput
        labelTitle='Qty.'
        type='number'
        name='quantity'
        value={String(quantity)}
        onchange={(e) => {
          handleInputOnChange(e, 'item', 0, id);
        }}
        className='item-quantity-input'
      />
      <SmartInput
        labelTitle='Price'
        type='number'
        name='price'
        value={String(price)}
        onchange={(e) => {
          handleInputOnChange(e, 'item', 0, id);
        }}
        className='item-price-input'
      />
      <SmartInput
        labelTitle='Total'
        type='number'
        name='total'
        value={String(total)}
        onchange={() => {
          return;
        }}
        className='item-total-input read-only'
      />
      <div className='remove-item-button center'>
        <RemoveItemButton
          handleOnClick={() => {
            removeItem(id);
            // verifyInputsValidation && verifyInputsValidation();
          }}
          title=''
        />
      </div>
    </div>
  );
};

export default Item;
