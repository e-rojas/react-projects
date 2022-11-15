import React from 'react';

interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
interface Invoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: Address;
  clientAddress: Address;
  items: Item[];
  total: number;
}
interface Props {
  invoice: Invoice;
}

const InvoiceCard: React.FC<Props> = ({ invoice }) => {
  return (
    <div className='invoice-card'>
      <span>{invoice.id} </span>
      <span>{invoice.clientName}</span>
      <span>{invoice.paymentDue}</span>
      <span>{invoice.status}</span>
      <span>{invoice.total}</span>
      {/* <div className='invoice-card__header'>
        <div className='invoice-card__header__title'></div>
        <div className='invoice-card__header__status'></div>
      </div>
      <div className='invoice-card__body'></div> */}
    </div>
  );
};

export default InvoiceCard;
