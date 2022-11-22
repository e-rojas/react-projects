import { Invoice } from './models/Invoice.interface';

export const name: string = 'invoice';

export const formatDueDate = (date: string, title: string) => {
  const dueDate = new Date(date);
  const dueMonth = dueDate.toLocaleString('default', { month: 'short' });
  const dueDay = dueDate.getDate();
  const dueYear = dueDate.getFullYear();
  return `${title} ${dueDay} ${dueMonth} ${dueYear}`;
};

export const ID = function () {
  return '' + Math.random().toString(36).substr(2, 7);
};

export const calculateTotal = (items: Invoice['items']) => {
  let total = 0;
  items.forEach((item) => {
    total += item.total;
  });
  return total;
};

export const invoiceID = () => {
  const first = Math.floor(Math.random() * 26) + 65;
  const second = Math.floor(Math.random() * 26) + 65;
  const rest = Math.floor(Math.random() * 1000000000);
  return String.fromCharCode(first, second) + String(rest).substring(0, 4);
};

// create a class for a new default invoice state
export class InvoiceState implements Invoice {
  id = invoiceID();
  createdAt = '';
  paymentDue = '';
  description = '';
  paymentTerms = 0;
  clientName = '';
  clientEmail = '';
  status = 'draft';
  senderAddress = {
    street: '',
    city: '',
    postCode: '',
    country: '',
  };
  clientAddress = {
    street: '',
    city: '',
    postCode: '',
    country: '',
  };
  items = [];
  total = 0;
}

// create a class for a new default item state
export class ItemState {
  id = ID();
  name = '';
  quantity = 0;
  price = 0;
  total = 0;
}
