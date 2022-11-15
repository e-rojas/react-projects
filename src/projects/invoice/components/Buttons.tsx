import React, { FC } from 'react';
import { BiPlus, BiPulse } from 'react-icons/bi';
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
      {className === 'btn__add-new-item' && <BiPlus size={20} />}
      {title}
    </button>
  );
};

export const EditButton: FC<Props> = ({
  title,

  className = 'btn__edit',
  handleOnClick,
}) => {
  return (
    <button onClick={handleOnClick} className={`invoice-btn ${className}`}>
      {title}
    </button>
  );
};

export const DraftButton: FC<Props> = ({ title }) => {
  return (
    <button className='invoice-btn btn__draft'>
      <div className='invoice-txt-purple'>
        <BiPlus size={20} />
      </div>
      {title}
    </button>
  );
};
