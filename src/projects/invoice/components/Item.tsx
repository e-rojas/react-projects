import React from 'react';
import { RemoveItemButton } from './Buttons';
import SmartInput from './SmartInput';
import ItemType from '../models/Item.interface';

interface Props {
  item: ItemType;
}
const Item: React.FC<Props> = ({ item: { id, name, quantity, price } }) => {
  return (
    <div className='invoice-form__input__wrapper'>
      <SmartInput
        labelTitle='Item Name'
        type='text'
        name='itemName'
        value={name}
        onchange={() => {}}
        className='item-name-input'
      />
      <SmartInput
        labelTitle='Qty.'
        type='number'
        name='quantity'
        value={String(quantity)}
        onchange={() => {}}
        className='item-quantity-input'
      />
      <SmartInput
        labelTitle='Price'
        type='number'
        name='price'
        value={Number(price).toFixed(2)}
        onchange={() => {}}
        className='item-price-input'
      />
      <SmartInput
        labelTitle='Total'
        type='number'
        name='total'
        value={String(Number(quantity) * Number(price))}
        onchange={() => {}}
        className='item-total-input read-only'
      />
      <div className='remove-item-button center'>
        <RemoveItemButton handleOnClick={() => {}} title='' />
      </div>
    </div>
  );
};

export default Item;
