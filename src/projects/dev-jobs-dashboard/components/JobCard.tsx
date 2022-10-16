import React from 'react';
import Job from '../../../types/Job';

const JobCard: React.FC<Job> = ({
  logoBackground,
  logo,
  contract,
  postedAt,
  position,
  company,
  location,
}) => {
  return (
    <div className='jobs-card'>
      <div
        style={{ backgroundColor: `${logoBackground}` }}
        className='card-icon center'
      >
        <img src={logo} alt='' className='w-100' />
      </div>
      <div className='m-t'>
        <p className='text-dark-gray font-weight-200'>
          {postedAt} . {contract}
        </p>
        <h3>{position}</h3>
        <span className='text-dark-gray font-weight-200'>{company}</span>
      </div>
      <h4 className='text-violet '>{location}</h4>
    </div>
  );
};

export default JobCard;
