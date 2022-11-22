import React from 'react';
import { DefaultButton } from './Buttons';
import SmartInput from './SmartInput';
import Item from './Item';
import { Invoice } from '../models/Invoice.interface';
import { InvoiceState, ItemState } from '../utils';

interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  newInvoice: Invoice;
  setNewInvoice: React.Dispatch<React.SetStateAction<Invoice>>;
  invoices: Invoice[];
  setInvoices: React.Dispatch<React.SetStateAction<Invoice[]>>;
}
const InvoiceForm: React.FC<Props> = ({
  setVisible,
  newInvoice,
  setNewInvoice,
  invoices,
  setInvoices,
}) => {
  React.useEffect(() => {
    const calculateTotal = (items: Invoice['items']) => {
      const total = items.reduce((acc, item) => {
        return acc + item.total;
      }, 0);
      setNewInvoice((prev) => ({ ...prev, total: Number(total.toFixed(2)) }));
    };
    calculateTotal(newInvoice.items);
  }, [newInvoice.items, setNewInvoice]);

  const removeItem = (id: string) => {
    const { items } = newInvoice;
    const newItems = items.filter((item) => item.id !== id);
    setNewInvoice({ ...newInvoice, items: newItems });
  };

  const calculatePaymentDue = (paymentTerms: number) => {
    const { createdAt } = newInvoice;
    const date = new Date(createdAt);
    date.setDate(date.getDate() + paymentTerms);
    return date.toISOString().split('T')[0];
  };

  const discardChanges = () => {
    setNewInvoice(new InvoiceState());
    setVisible(false);
  };

  const saveAsDraft = () => {
    setInvoices([...invoices, newInvoice]);
    discardChanges();
  };

  const onChangeSingleFieldInput = (
    e: React.ChangeEvent<HTMLInputElement> | null,
    key?: string,
    paymentTerms?: number,
    itemID?: string
  ) => {
    switch (key) {
      case 'senderAddress':
        if (e) {
          setNewInvoice({
            ...newInvoice,
            senderAddress: {
              ...newInvoice.senderAddress,
              [e.target.name]: e.target.value,
            },
          });
        }
        break;
      case 'clientAddress':
        if (e) {
          setNewInvoice({
            ...newInvoice,
            clientAddress: {
              ...newInvoice.clientAddress,
              [e.target.name]: e.target.value,
            },
          });
        }
        break;
      case 'paymentTerms':
        if (e && paymentTerms) {
          setNewInvoice({
            ...newInvoice,
            paymentTerms: paymentTerms,
            paymentDue: calculatePaymentDue(paymentTerms),
          });
        }
        break;
      case 'item':
        if (e && itemID) {
          setNewInvoice({
            ...newInvoice,
            items: newInvoice.items.map((item) => {
              if (item.id === itemID) {
                return {
                  ...item,
                  [e.target.name]: e.target.value,
                  total:
                    e.target.name === 'price'
                      ? +(item.quantity * +e.target.value).toFixed(2)
                      : 0,
                };
              }
              return item;
            }),
          });
        }
        break;
      default:
        if (e) {
          setNewInvoice({ ...newInvoice, [e.target.name]: e.target.value });
        }
        break;
    }
  };
  return (
    <div className='invoice-form'>
      <div className='invoice-form__body w-100 '>
        <h3 className='invoice-form__body__title'>Bill From</h3>
        <SmartInput
          labelTitle='Street Address'
          type='text'
          name='street'
          value={newInvoice.senderAddress.street}
          onchange={(e) => {
            onChangeSingleFieldInput(e, 'senderAddress');
          }}
        />
        <div className=' invoice-form__input__wrapper'>
          <SmartInput
            labelTitle='City'
            type='text'
            name='city'
            value={newInvoice.senderAddress.city}
            onchange={(e) => {
              onChangeSingleFieldInput(e, 'senderAddress');
            }}
            className='city-input'
          />
          <SmartInput
            labelTitle='Post Code'
            type='text'
            name='postCode'
            value={newInvoice.senderAddress.postCode}
            onchange={(e) => {
              onChangeSingleFieldInput(e, 'senderAddress');
            }}
            className='post-code-input'
          />
          <SmartInput
            labelTitle='Country'
            type='text'
            name='country'
            value={newInvoice.senderAddress.country}
            onchange={(e) => {
              onChangeSingleFieldInput(e, 'senderAddress');
            }}
            className='country-input'
          />
        </div>
        <h3 className='invoice-form__body__title'>Bill To</h3>
        <SmartInput
          labelTitle={`Client's Name`}
          type='text'
          name='clientName'
          value={newInvoice.clientName}
          onchange={(e) => {
            onChangeSingleFieldInput(e);
          }}
          className='w-100'
        />
        <SmartInput
          labelTitle='Client Email'
          type='email'
          name='clientEmail'
          value={newInvoice.clientEmail}
          onchange={(e) => {
            onChangeSingleFieldInput(e);
          }}
          className='w-100'
        />
        <SmartInput
          labelTitle='Street Address'
          type='text'
          name='street'
          value={newInvoice.clientAddress.street}
          onchange={(e) => {
            onChangeSingleFieldInput(e, 'clientAddress');
          }}
          className='w-100'
        />
        <div className=' invoice-form__input__wrapper'>
          <SmartInput
            labelTitle='City'
            type='text'
            name='city'
            value={newInvoice.clientAddress.city}
            onchange={(e) => {
              onChangeSingleFieldInput(e, 'clientAddress');
            }}
            className='city-input'
          />
          <SmartInput
            labelTitle='Post Code'
            type='text'
            name='postCode'
            value={newInvoice.clientAddress.postCode}
            onchange={(e) => {
              onChangeSingleFieldInput(e, 'clientAddress');
            }}
            className='post-code-input'
          />
          <SmartInput
            labelTitle='Country'
            type='text'
            name='country'
            value={newInvoice.clientAddress.country}
            onchange={(e) => {
              onChangeSingleFieldInput(e, 'clientAddress');
            }}
            className='country-input'
          />
        </div>

        <div className='invoice-form__input__wrapper'>
          <SmartInput
            labelTitle='Issue Date'
            type='date'
            name='createdAt'
            value={newInvoice.createdAt}
            onchange={(e) => {
              onChangeSingleFieldInput(e);
            }}
            className='date-input'
          />
          <SmartInput
            labelTitle='Payment Terms'
            type='select'
            name='paymentTerms'
            value={String(newInvoice.paymentTerms)}
            onchange={(e: any) => {
              const { value } = e;
              onChangeSingleFieldInput(
                e,
                'paymentTerms',
                value as unknown as number
              );
            }}
            className='select-input'
          />
        </div>
        <SmartInput
          labelTitle='Project Description'
          type='text'
          name='description'
          value={newInvoice.description}
          onchange={(e) => {
            onChangeSingleFieldInput(e);
          }}
          className='w-100'
        />
        <div className='invoice-form__items'>
          <h1 className='invoice-form__items__title'>Item List</h1>
          <div className='invoice-form__input__wrapper'>
            {newInvoice &&
              newInvoice.items &&
              newInvoice.items.map((item) => (
                <Item
                  item={item}
                  key={item.id}
                  removeItem={removeItem}
                  onChangeSingleFieldInput={onChangeSingleFieldInput}
                />
              ))}
            <DefaultButton
              title='Add New Item'
              iconDisplay={false}
              className='btn__add-new-item w-100'
              handleOnClick={() => {
                setNewInvoice({
                  ...newInvoice,
                  items: [...newInvoice.items, new ItemState()],
                });
              }}
            />
          </div>
        </div>
      </div>

      <div className='invoice-form__footer'>
        <DefaultButton
          title='Discard'
          iconDisplay={false}
          className='btn__edit'
          handleOnClick={() => {
            discardChanges();
          }}
        />

        <DefaultButton
          handleOnClick={() => {
            saveAsDraft();
          }}
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
