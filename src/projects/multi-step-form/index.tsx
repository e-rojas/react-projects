import React from 'react';
import './multi-step-form.styles.scss';
import arcadeIcon from './images/icon-arcade.svg';
import advancedIcon from './images/icon-advanced.svg';
import proIcon from './images/icon-pro.svg';
const MultiStepForm = () => {
  // eslint-disable-next-line
  const [currentStep, setCurrentStep] = React.useState(1);
  return (
    <div className='multi-step-form-container w-full '>
      <section className='multi-step-form sm:w-full md:w-9/12 sm:rounded-none md:rounded-md md:p-4'>
        <aside className='multi-step-form__side-bar '>
          <div className='selected-items '>
            {['Your Info', 'Selected Item', 'Add Ons', 'Summary'].map(
              (item, index) => (
                <SideBarSelectedItem
                  key={index}
                  itemLabel={item}
                  itemNumber={index + 1}
                  selected={currentStep === index + 1}
                />
              )
            )}
          </div>
        </aside>
        <Form page={currentStep} />
      </section>
    </div>
  );
};

export default MultiStepForm;

export const SideBarSelectedItem: React.FC<{
  itemNumber: number;
  itemLabel: string;
  selected?: boolean;
}> = ({ itemNumber, itemLabel, selected }) => {
  return (
    <div className='sidebar-selection-item '>
      <span
        className={`selected-item-number rounded-full w-8 h-8  flex justify-center items-center ${
          selected ? 'selected' : ''
        }`}
      >
        {itemNumber}
      </span>
      <div className='selected-item-wrapper flex flex-col'>
        <span className='selected-item-step '>{`Step ${itemNumber}`}</span>
        <span className='selected-item-label'>{itemLabel}</span>
      </div>
    </div>
  );
};

export const Form: React.FC<{ page: number }> = ({ page }) => {
  switch (page) {
    case 1:
      return <InfoSection />;
    case 2:
      return <PlanSection />;
    case 3:
      return <AddOnsSection />;
    case 4:
      return <SummarySection />;
    default:
      return <InfoSection />;
  }
};

export const InfoSection: React.FC = () => {
  return (
    <section className='info-section'>
      <h1 className='text-4xl'>Personal Info</h1>
      <p className='text-slate-400 mb-4'>
        Please provide your name, email address, and phone number.
      </p>
      {inputFieldsData.map((inputField, index) => (
        <SmartInput
          key={index}
          label={inputField.label}
          type={inputField.type}
          placeholder={inputField.placeholder}
          onChange={(e) => console.log(e.target.value)}
          required={inputField.required}
        />
      ))}
    </section>
  );
};

export const PlanSection: React.FC = () => {
  return (
    <div className='info-section'>
      <h1 className='text-4xl'>Select Your Plan</h1>
      <p className='text-slate-400 mb-4'>
        You have the option of monthly or yearly billing.
      </p>
      {/*  */}
      <div className='plan-selection'>
        {plansData.map((plan, index) => (
          <SmartRadio
            key={index}
            label={plan.name}
            name={plan.inputName}
            value={plan.name}
            price={plan.price}
            selected={plan.selected}
            onClick={(e) => console.log(e.currentTarget.value)}
            icon={plan.icon}
          />
        ))}
      </div>
    </div>
  );
};

export const AddOnsSection: React.FC = () => {
  return (
    <div>
      <h1>Add Ons</h1>
    </div>
  );
};

export const SummarySection: React.FC = () => {
  return (
    <div>
      <h1>SummarySection</h1>
    </div>
  );
};

export const SmartInput: React.FC<{
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}> = ({ label, type, placeholder, value, onChange, required }) => {
  return (
    <div className='mb-4 w-auto'>
      <label className='block text-gray-700 text-sm  mb-1' htmlFor='username'>
        {label}
      </label>
      <input
        className='focus:outline-blue-300 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline'
        id='username'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export const SmartRadio: React.FC<{
  label: string;
  value: string;
  name: string;
  price: number;
  icon?: string;
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  selected?: boolean;
}> = ({ label, value, name, selected, onClick, icon, price }) => {
  return (
    <>
      <input
        defaultChecked={selected}
        type='radio'
        name={name}
        id={`${name}_${value}`}
        value={value}
        onClick={onClick}
      />
      <label htmlFor={`${name}_${value}`}>
        <div className='radio-input-wrapper flex flex-row'>
          <img src={icon} alt='' width={35} height={35} />
          <div className='radio-icon-wrapper flex flex-col ml-3'>
            <span>{label}</span>
            <span className='text-gray-400'>{`$${price}/mo`}</span>
          </div>
        </div>
      </label>
    </>
  );
};

export const inputFieldsData = [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
    placeholder: 'e.g. John Doe',
    required: true,
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'e.g. doe@mail.com',
    required: true,
  },
  {
    label: 'Phone',
    type: 'tel',
    name: 'phone',
    placeholder: 'e.g. 123-456-7890',
    required: true,
  },
];

export const plansData = [
  {
    name: 'arcade',
    price: 9.99,
    billing: 'monthly',
    icon: arcadeIcon,
    value: 'arcade',
    selected: true,
    inputName: 'subscription-plan',
  },
  {
    name: 'advanced',
    price: 19.99,
    billing: 'monthly',
    icon: advancedIcon,
    value: 'advanced',
    selected: false,
    inputName: 'subscription-plan',
  },
  {
    name: 'pro',
    price: 29.99,
    billing: 'monthly',
    icon: proIcon,
    value: 'pro',
    selected: false,
    inputName: 'subscription-plan',
  },
];
