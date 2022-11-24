import React from 'react';
import { DefaultButton } from './Buttons';
import SmartInput from './SmartInput';
import Item from './Item';
import { Invoice } from '../models/Invoice.interface';
import { checkInputsValidation, InvoiceState, ItemState } from '../utils';

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
  const [allInputsValidated, setAllInputsValidated] =
    React.useState<boolean>(false);
  React.useEffect(() => {
    const calculateTotal = (items: Invoice['items']) => {
      const total = items.reduce((acc, item) => {
        return acc + item.total;
      }, 0);
      setNewInvoice((prev) => ({ ...prev, total: Number(total.toFixed(2)) }));
    };
    calculateTotal(newInvoice.items);
    verifyInputsValidation();
    // eslint-disable-next-line
  }, [newInvoice.items]);

  const addItem = () => {
    setNewInvoice({
      ...newInvoice,
      items: [...newInvoice.items, new ItemState()],
    });
  };

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

  const handleDiscardChanges = () => {
    setNewInvoice(new InvoiceState());
    setVisible(false);
  };

  const handleSaveDraft = () => {
    const updatedInvoice = { ...newInvoice, status: 'draft' };
    setInvoices([...invoices, updatedInvoice]);
    handleDiscardChanges();
  };

  const handleSaveAndSend = () => {
    const updatedInvoice = { ...newInvoice, status: 'pending' };
    setInvoices([...invoices, updatedInvoice as Invoice]);
    handleDiscardChanges();
  };

  const verifyInputsValidation = React.useCallback(() => {
    const validated = checkInputsValidation(newInvoice);
    setAllInputsValidated(validated);
  }, [newInvoice]);

  const handleInputOnChange = (
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
            handleInputOnChange(e, 'senderAddress');
          }}
        />
        <div className=' invoice-form__input__wrapper'>
          <SmartInput
            labelTitle='City'
            type='text'
            name='city'
            value={newInvoice.senderAddress.city}
            onchange={(e) => {
              handleInputOnChange(e, 'senderAddress');
            }}
            className='city-input'
          />
          <SmartInput
            labelTitle='Post Code'
            type='text'
            name='postCode'
            value={newInvoice.senderAddress.postCode}
            onchange={(e) => {
              handleInputOnChange(e, 'senderAddress');
            }}
            className='post-code-input'
          />
          <SmartInput
            labelTitle='Country'
            type='text'
            name='country'
            value={newInvoice.senderAddress.country}
            onchange={(e) => {
              handleInputOnChange(e, 'senderAddress');
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
          onchange={handleInputOnChange}
          className='w-100'
        />
        <SmartInput
          labelTitle='Client Email'
          type='email'
          name='clientEmail'
          value={newInvoice.clientEmail}
          onchange={handleInputOnChange}
          className='w-100'
        />
        <SmartInput
          labelTitle='Street Address'
          type='text'
          name='street'
          value={newInvoice.clientAddress.street}
          onchange={(e) => {
            handleInputOnChange(e, 'clientAddress');
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
              handleInputOnChange(e, 'clientAddress');
            }}
            className='city-input'
          />
          <SmartInput
            labelTitle='Post Code'
            type='text'
            name='postCode'
            value={newInvoice.clientAddress.postCode}
            onchange={(e) => {
              handleInputOnChange(e, 'clientAddress');
            }}
            className='post-code-input'
          />
          <SmartInput
            labelTitle='Country'
            type='text'
            name='country'
            value={newInvoice.clientAddress.country}
            onchange={(e) => {
              handleInputOnChange(e, 'clientAddress');
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
            onchange={handleInputOnChange}
            className='date-input'
          />
          <SmartInput
            labelTitle='Payment Terms'
            type='select'
            name='paymentTerms'
            value={String(newInvoice.paymentTerms)}
            onchange={(e: any) => {
              const { value } = e;
              handleInputOnChange(
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
          onchange={handleInputOnChange}
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
                  handleInputOnChange={handleInputOnChange}
                />
              ))}
            <DefaultButton
              title='Add New Item'
              iconDisplay={false}
              className='btn__add-new-item w-100'
              handleOnClick={addItem}
            />
          </div>
        </div>
      </div>

      <div className='invoice-form__footer'>
        <DefaultButton
          title='Discard'
          iconDisplay={false}
          className='btn__edit'
          handleOnClick={handleDiscardChanges}
        />

        <DefaultButton
          handleOnClick={handleSaveDraft}
          title='Save as Draft'
          iconDisplay={false}
          className={`${allInputsValidated ? 'btn__draft' : 'btn--disabled'}`}
        />
        <DefaultButton
          className={`${allInputsValidated ? 'btn__primary' : 'btn--disabled'}`}
          handleOnClick={handleSaveAndSend}
          title='Save & Send'
          iconDisplay={false}
        />
      </div>
    </div>
  );
};

export default InvoiceForm;
