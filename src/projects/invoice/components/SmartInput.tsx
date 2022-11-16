import React from 'react';
interface Props {
  labelTitle: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
  name: string;
  className?: string;
}
const SmartInput: React.FC<Props> = ({
  labelTitle,
  onchange,
  type,
  value,
  name,
  className = '',
}) => {
  if (type === 'date') {
    return (
      <div className={`input-wrapper ${className}`}>
        <label
          className='invoice-form__label'
          htmlFor={labelTitle.toLocaleLowerCase()}
        >
          {labelTitle}
        </label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onchange}
          id={name}
          className='invoice-form__date__input'
        />
      </div>
    );
  }
  return (
    <div className={`input-wrapper ${className}`}>
      <label
        className='invoice-form__label'
        htmlFor={labelTitle.toLocaleLowerCase()}
      >
        {labelTitle}
      </label>
      <input
        className='invoice-form__input'
        type={type}
        name={name.toLocaleLowerCase()}
        id={name.toLocaleLowerCase()}
        onChange={onchange}
        value={value}
      />
    </div>
  );
};

export default SmartInput;
