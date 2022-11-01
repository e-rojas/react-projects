interface SmartFormInputProps {
  topClassName?: string;
  inputClassName?: string;
  displayButtonIcon?: boolean;
  faIcon?: string;
  placeholderText: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SmartFormInput: React.FC<SmartFormInputProps> = ({
  topClassName,
  inputClassName,
  displayButtonIcon,
  faIcon,
  placeholderText,
  value = '',
  onChange,
}) => {
  return (
    <div className={`${topClassName}`}>
      <form className='search'>
        <input
          value={value}
          onChange={onChange}
          type='text'
          placeholder={placeholderText}
          className={`${inputClassName}`}
        />
        {displayButtonIcon && (
          <button className='db-button btn-primary m-l'>
            <i className={`${faIcon}`} aria-hidden='true'></i>
          </button>
        )}
      </form>
    </div>
  );
};

export default SmartFormInput;
