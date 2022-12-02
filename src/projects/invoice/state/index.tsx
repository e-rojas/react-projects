import React, { PropsWithChildren } from 'react';
import { Invoice } from '../models/Invoice.interface';

// an enum with all the types of actions that can be dispatched for the invoices reducer
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
const initialState: Invoice[] = [];

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

/*
    function App () {
        return (
            <InvoicesProvider>
                <InvoicePage />
            </InvoicesProvider>
        )
    }

    export default App;

    const useInvoice = () => {
        const invoiceData = data as Invoice[];
        const { invoices, dispatch } = React.useContext(InvoicesContext);

        React.useEffect(() => {
            dispatch({ type: InvoiceActionTypes.SET_INVOICES, payload: invoiceData });
        }, [dispatch]);

        const setInvoices = React.useCallback(
            (invoices: Invoice[]) => {
                dispatch({ type: InvoiceActionTypes.SET_INVOICES, payload: invoices });
            },
            [dispatch]
        );
        const setInvoice = React.useCallback(
            (invoice: Invoice) => {
                dispatch({ type: InvoiceActionTypes.SET_INVOICE, payload: invoice });
            },
            [dispatch]
        );
        const deleteInvoice = React.useCallback(
            (id: string) => {
                dispatch({ type: InvoiceActionTypes.DELETE_INVOICE, payload: id });
            },
            [dispatch]
        );
        const updateInvoice = React.useCallback(
            (invoice: Invoice) => {
                dispatch({ type: InvoiceActionTypes.UPDATE_INVOICE, payload: invoice });
            },
            [dispatch]
        );
        return {
            invoices,
            setInvoices,
            setInvoice,
            deleteInvoice,
            updateInvoice,
        };
    };

    const InvoicePage = () => {
        const invoiceData = data as Invoice[];
        const { invoices, dispatch } = React.useContext(InvoicesContext);

        const setInvoices = (invoices: Invoice[]) => {
            dispatch({ type: InvoiceActionTypes.SET_INVOICES, payload: invoices });
        };

        const setInvoice = (invoice: Invoice) => {
            dispatch({ type: InvoiceActionTypes.SET_INVOICE, payload: invoice });
        };

        const deleteInvoice = (id: string) => {
            dispatch({ type: InvoiceActionTypes.DELETE_INVOICE, payload: id });
        };

        const updateInvoice = (invoice: Invoice) => {
            dispatch({ type: InvoiceActionTypes.UPDATE_INVOICE, payload: invoice });
        };

        React.useEffect(() => {
            // fetch invoices from the API
            // setInvoices(invoices);
            setInvoices(invoiceData);
        }, []);


        return (
            <div className='w-100 p'>

                </div>
            );
        // ...
    } */
