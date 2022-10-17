import React from 'react';
import Job from '../../../types/Job';
import { Link } from 'react-router-dom';
const JobCard: React.FC<Job> = ({
  logoBackground,
  logo,
  contract,
  postedAt,
  position,
  company,
  location,
  _id,
  ...rest
}) => {
  return (
    <Link
      className='dev-job-link'
      to={`/dev-jobs-dashboard/${_id}`}
      state={
        {
          logoBackground,
          logo,
          contract,
          postedAt,
          position,
          company,
          location,
          _id,
          ...rest,
        } as Job
      }
    >
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
    </Link>
  );
};

export default JobCard;
