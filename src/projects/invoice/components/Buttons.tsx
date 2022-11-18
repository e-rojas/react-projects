import React, { FC } from 'react';
import { BiPlus } from 'react-icons/bi';
import { FiChevronLeft } from 'react-icons/fi';
interface Props {
  title: string;
  iconDisplay?: boolean;
  className?: string;
  handleOnClick?: () => void;
}

export const DefaultButton: FC<Props> = ({
  title,
  iconDisplay,
  className = 'btn__primary',
  handleOnClick,
}) => {
  return (
    <button onClick={handleOnClick} className={`invoice-btn ${className}`}>
      {iconDisplay && (
        <div>
          <BiPlus size={20} className='invoice-txt-purple' />
        </div>
      )}
      {className === 'btn__add-new-item' && <BiPlus size={14} />}
      {title}
    </button>
  );
};

export const GoBackButton: FC<Props> = ({
  title,
  className = 'state-back',
  handleOnClick,
}) => {
  return (
    <button onClick={handleOnClick} className={`invoice-btn ${className}`}>
      <FiChevronLeft size={16} />
      <span className='invoice-btn__go-back'>{title}</span>
    </button>
  );
};
