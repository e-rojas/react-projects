import React from 'react';
import './multi-step-form.styles.scss';
const MultiStepForm = () => {
  return (
    <div className='multi-step-form-container w-full h-screen '>
      <section className='multi-step-form'>
        <aside className='multi-step-form__side-bar'>
          <div className='selected-btns-wrapper'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
          </div>
        </aside>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          eligendi similique laboriosam blanditiis mollitia illo maiores nobis
          alias dolore, nihil recusandae qui eum quibusdam dolorem sed
          veritatis, ea facere reiciendis!
        </p>
        <h1 className='sm:my-0 md:my-4'>Hello world</h1>
      </section>
    </div>
  );
};

export default MultiStepForm;
/* <h1 className='text-3xl font-bold underline'>Multi-Step-Form</h1>; */
