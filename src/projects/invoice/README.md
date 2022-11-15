# Sample

```js
import { DefaultButton } from './components/Buttons';
  <DefaultButton title='Mark as Paid' iconDisplay={false} />
      <br />
      <DefaultButton title='New Invoice' iconDisplay={true} />
      <br />
      <DefaultButton title='Edit' iconDisplay={false} className='btn__edit' />
      <br />
      <DefaultButton
        title='Delete'
        iconDisplay={false}
        className='btn__warning'
      />
      <br />
      <DefaultButton
        title='Save as Draft'
        iconDisplay={false}
        className='btn__draft'
      />
      <br />
      <DefaultButton
        title='Add New Item'
        iconDisplay={false}
        className='btn__add-new-item'
      />
      <br />

```

## Invoice Data

```js

const sample = {
  id: 'RT3080',
  createdAt: '2021-08-18',
  paymentDue: '2021-08-19',
  description: 'Re-branding',
  paymentTerms: 1,
  clientName: 'Jensen Huang',
  clientEmail: 'jensenh@mail.com',
  status: 'paid',
  senderAddress: {
    street: '19 Union Terrace',
    city: 'London',
    postCode: 'E1 3EZ',
    country: 'United Kingdom',
  },
  clientAddress: {
    street: '106 Kendell Street',
    city: 'Sharrington',
    postCode: 'NR24 5WQ',
    country: 'United Kingdom',
  },
  items: [
    { name: 'Brand Guidelines', quantity: 1, price: 1800.9, total: 1800.9 },
  ],
  total: 1800.97,
};

```
