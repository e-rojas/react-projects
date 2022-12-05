import React from 'react';
import './multi-step-form.styles.scss';
const MultiStepForm = () => {
  return (
    <div className='multi-step-form-container w-full '>
      <section className='multi-step-form sm:w-full md:w-9/12 sm:rounded-none md:rounded-md md:p-4'>
        <aside className='multi-step-form__side-bar'>
          <div className='selected-items-wrapper'>
            {['Your Info', 'Selected Item', 'Add Ons', 'Summary'].map(
              (item, index) => (
                <SideBarSelectedItem
                  key={index}
                  itemLabel={item}
                  itemNumber={index + 1}
                  selected={index === 3}
                />
              )
            )}
          </div>
        </aside>
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
    <div className='sidebar-selection-item flex items-center space-x-4'>
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
