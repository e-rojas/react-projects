import React from 'react';
import { timeLabeledInputsData } from '../utils';
interface Props {
  themeFont: string;
  themeColor: string;
  setThemeFont: React.Dispatch<React.SetStateAction<string>>;
  setThemeColor: React.Dispatch<React.SetStateAction<string>>;
}

const ModalBody: React.FC<Props> = ({
  themeFont,
  themeColor,
  setThemeFont,
  setThemeColor,
}) => {
  return (
    <>
      <div className='modal-body'>
        <div className='flex-spread p-t'>
          <span className='txt-pom-dark font-weight-bold letter-spacing-1'>
            FONT
          </span>
          <div className='font-selection-btns'>
            <label className='font-radio-input font-kumbh'>
              <input
                type='radio'
                name='font-type'
                defaultValue='font-type'
                checked={themeFont === 'kumbh'}
                onChange={() => setThemeFont('kumbh')}
              />
              <span></span>
            </label>
            <label className='font-radio-input font-roboto'>
              <input
                type='radio'
                name='font-type'
                defaultValue='font-type'
                checked={themeFont === 'roboto'}
                onChange={() => setThemeFont('roboto')}
              />
              <span></span>
            </label>
            <label className='font-radio-input font-mono'>
              <input
                type='radio'
                name='font-type'
                defaultValue='font-type'
                checked={themeFont === 'mono'}
                onChange={() => setThemeFont('mono')}
              />
              <span></span>
            </label>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='modal-body'>
        <div className='flex-spread p-t'>
          <span className='txt-pom-dark font-weight-bold letter-spacing-1'>
            COLOR
          </span>
          <div className='color-selection-btns'>
            <label className='pomo-alert color-radio-input'>
              <input
                onClick={() => setThemeColor('alert')}
                type='radio'
                name='theme-color'
                defaultValue='value'
                checked={themeColor === 'alert'}
              />
              <span></span>
            </label>
            <label className='pomo-success  color-radio-input'>
              <input
                onClick={() => setThemeColor('success')}
                type='radio'
                name='theme-color'
                defaultValue='value'
                checked={themeColor === 'success'}
              />
              <span></span>
            </label>
            <label className='pomo-warning  color-radio-input'>
              <input
                onClick={() => setThemeColor('warning')}
                type='radio'
                name='theme-color'
                defaultValue='value'
                checked={themeColor === 'warning'}
              />
              <span></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBody;
