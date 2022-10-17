import React from 'react';
import { useLocation } from 'react-router-dom';
import Job from '../../../types/Job';
import Delay from './Delay.animation';
const JobDetails: React.FC = () => {
  const location = useLocation();
  const state = location.state as Job;
  console.log('state', state);

  const {
    company,
    logo,
    logoBackground,
    contract,
    postedAt,
    position,
    location: jobLocation,
    description,
    _id,
  } = state;

  return (
    <Delay delay={500} className='dev-dashboard__wrapper vh-100'>
      <div className='dev-dashboard__search details '>
        <div
          className='logo center'
          style={{ backgroundColor: `${logoBackground}` }}
        >
          <img src={logo} alt={company} width={81} />
        </div>
      </div>
    </Delay>
  );
};

export default JobDetails;
