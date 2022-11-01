import React from 'react';
import Delay from '../../../components/Delay.animation';
import { useLocation } from 'react-router-dom';
import { companyUrl, handleFormSubmit } from '../utils';
import Job from '../../../types/Job';
const JobApplicationSection = () => {
  const location = useLocation();
  const { state } = location;
  const { company, logoBackground, logo, website } = state as Job;
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    resume: '',
    coverLetterMessage: '',
  });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <Delay delay={500} className='dev-dashboard__wrapper  flex-column'>
      <div className=' details bg-fill '>
        <div className='logo' style={{ backgroundColor: `${logoBackground}` }}>
          <img src={logo} alt={company} width={81} />
        </div>
        <div className='company-header w-100  '>
          <div>
            <h1>{company}</h1>
            <p className='text-dark-gray font-weight-400'>
              {companyUrl(website)}
            </p>
          </div>
          {submitted && (
            <Delay delay={200} className='alert alert-primary h6'>
              Application sent!
            </Delay>
          )}
        </div>
      </div>
      <div className='details-information bg-fill h-100 '>
        <h2>Personal Information</h2>

        <form
          onSubmit={(e) => {
            handleFormSubmit(e, setSubmitted, setForm);
          }}
          className='p'
        >
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Full Name
            </label>
            <input
              value={form.name}
              onChange={handleChange}
              name='name'
              type='text'
              className='form-control'
              id='name'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email-address' className='form-label'>
              Email address
            </label>
            <input
              value={form.email}
              onChange={handleChange}
              name='email'
              type='email'
              className='form-control'
              id='email-address'
              aria-describedby='emailHelp'
            />
            <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='formFile' className='form-label'>
              Resume
            </label>
            <input
              onChange={handleChange}
              name='resume'
              className='form-control'
              type='file'
              id='formFile'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='coverLetterMessage' className='form-label'>
              Cover Letter Message
            </label>
            <textarea
              value={form.coverLetterMessage}
              onChange={handleChange}
              name='coverLetterMessage'
              className='form-control'
              id='coverLetterMessage'
              rows={3}
            />
          </div>
          <button
            className={`db-button btn-secondary mobile-w-100 ${
              (form.name === '' || form.email === '' || form.resume === '') ===
                true && 'disabled'
            }`}
          >
            Submit Application
          </button>
        </form>
      </div>
    </Delay>
  );
};

export default JobApplicationSection;
