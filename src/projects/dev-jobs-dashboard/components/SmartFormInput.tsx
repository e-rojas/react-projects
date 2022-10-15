interface SmartFormInputProps {
  topClassName?: string;
  inputClassName?: string;
  displayButtonIcon?: boolean;
  faIcon?: string;
  placeholderText: string;
}
const SmartFormInput: React.FC<SmartFormInputProps> = ({
  topClassName,
  inputClassName,
  displayButtonIcon,
  faIcon,
  placeholderText,
}) => {
  return (
    <div className={`${topClassName}`}>
      <form className='search'>
        <input
          type='text'
          placeholder={placeholderText}
          className={`${inputClassName}`}
        />
        {displayButtonIcon && (
          <button className='submit-btn m-l'>
            <i className={`${faIcon}`} aria-hidden='true'></i>
          </button>
        )}
      </form>
    </div>
  );
};

export default SmartFormInput;
