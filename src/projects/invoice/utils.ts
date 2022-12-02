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

export const checkInputsValidation = (newInvoice: Invoice) => {
  const sendersInfoFilled =
    newInvoice.senderAddress.street !== '' &&
    newInvoice.senderAddress.city !== '' &&
    newInvoice.senderAddress.postCode !== '' &&
    newInvoice.senderAddress.country !== '';
  const clientsInfoFilled =
    newInvoice.clientAddress.street !== '' &&
    newInvoice.clientAddress.city !== '' &&
    newInvoice.clientAddress.postCode !== '' &&
    newInvoice.clientAddress.country !== '';
  const itemsFilled = newInvoice.items.length !== 0;
  const invoiceFilled =
    newInvoice.createdAt !== '' &&
    newInvoice.paymentDue !== '' &&
    newInvoice.description !== '' &&
    newInvoice.paymentTerms !== 0 &&
    newInvoice.clientName !== '' &&
    newInvoice.clientEmail !== '';
  return sendersInfoFilled && clientsInfoFilled && itemsFilled && invoiceFilled;
};

export const filteredInvoices = (
  invoices: Invoice[],
  filterByStatus: {
    [key: string]: boolean;
  }
) => {
  const { draft, pending, paid } = filterByStatus;
  // eslint-disable-next-line
  const filteredInvoices = invoices.filter((invoice) => {
    if (paid && invoice.status === 'paid') {
      return invoice;
    } else if (pending && invoice.status === 'pending') {
      return invoice;
    } else if (draft && invoice.status === 'draft') {
      return invoice;
    } else if (!paid && !pending && !draft) {
      return invoice;
    }
  });
  return filteredInvoices;
};

export const middlewareFilteredInvoices = (
  invoices: Invoice[],
  filterByStatus: {
    [key: string]: boolean;
  },
  setTotalInvoices?: React.Dispatch<React.SetStateAction<number>>
): Invoice[] => {
  setTotalInvoices &&
    setTotalInvoices(filteredInvoices(invoices, filterByStatus).length);
  return filteredInvoices(invoices, filterByStatus);
};
