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

export const defaultNewInvoiceState: Invoice = {
  id: '',
  createdAt: '',
  paymentDue: '',
  description: '',
  paymentTerms: 0,
  clientName: '',
  clientEmail: '',
  status: 'pending',
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  items: [],
  total: 0,
};
