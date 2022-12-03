import React, { PropsWithChildren } from 'react';
import { Invoice } from '../models/Invoice.interface';
import data from '../data.json';

export enum InvoiceActionTypes {
  SET_INVOICES = 'SET_INVOICES',
  SET_INVOICE = 'SET_INVOICE',
  DELETE_INVOICE = 'DELETE_INVOICE',
  UPDATE_INVOICE = 'UPDATE_INVOICE',
}

type Action =
  | { type: InvoiceActionTypes.SET_INVOICES; payload: Invoice[] }
  | { type: InvoiceActionTypes.SET_INVOICE; payload: Invoice }
  | { type: InvoiceActionTypes.DELETE_INVOICE; payload: string }
  | { type: InvoiceActionTypes.UPDATE_INVOICE; payload: Invoice };

// the initial state of the invoices reducer
const invoiceData = data as Invoice[];
const initialState: Invoice[] = invoiceData;

// the invoices reducer
export const invoicesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case InvoiceActionTypes.SET_INVOICES:
      return action.payload;
    case InvoiceActionTypes.SET_INVOICE:
      return [...state, action.payload];
    case InvoiceActionTypes.DELETE_INVOICE:
      return state.filter((invoice) => invoice.id !== action.payload);
    case InvoiceActionTypes.UPDATE_INVOICE:
      return state.map((invoice) =>
        invoice.id === action.payload.id ? action.payload : invoice
      );
    default:
      return state;
  }
};

// the invoices context
export const InvoicesContext = React.createContext<{
  invoices: Invoice[];
  dispatch: React.Dispatch<Action>;
}>({
  invoices: [],
  dispatch: () => null,
});

// the invoices provider
export const InvoicesProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [invoices, dispatch] = React.useReducer(invoicesReducer, initialState);

  return (
    <InvoicesContext.Provider value={{ invoices, dispatch }}>
      {children}
    </InvoicesContext.Provider>
  );
};
