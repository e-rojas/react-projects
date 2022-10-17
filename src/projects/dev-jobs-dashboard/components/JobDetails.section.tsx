import React from 'react';
import { useLocation } from 'react-router-dom';
import Job from '../../../types/Job';
import { companyUrl } from '../utils';
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
    website,
    requirements,
    role,
  } = state;

  return (
    <Delay delay={500} className='dev-dashboard__wrapper  flex-column'>
      <div className=' details bg-fill '>
        <div
          className='logo center'
          style={{ backgroundColor: `${logoBackground}` }}
        >
          <img src={logo} alt={company} width={81} />
        </div>
        <div className='company-header w-100  flex-spread-center p-x'>
          <div>
            <h1>{company}</h1>
            <p className='text-dark-gray font-weight-400'>
              {companyUrl(website)}
            </p>
          </div>
          <button className='submit-btn'>Company Site</button>
        </div>
      </div>
      <div className='details-information bg-fill h-100 m-b-3 p-t p-x-3'>
        <p className='text-dark-gray font-weight-200'>
          {postedAt} . {contract}
        </p>
        <h1>{position}</h1>
        <h4 className='text-violet '>{jobLocation}</h4>
        <h3>Requirements</h3>
        <p className='text-dark-gray font-weight-200'>{requirements.content}</p>
        <ul>
          {requirements.items.map((item, index) => (
            <li className='text-dark-gray font-weight-200' key={index}>
              {item}
            </li>
          ))}
        </ul>
        <h3>What You Will Do</h3>
        <p className='text-dark-gray font-weight-200'>{role.content}</p>
        <ol>
          {role.items.map((item, index) => (
            <li className='text-dark-gray font-weight-200' key={index}>
              {item}
            </li>
          ))}
        </ol>
      </div>
      <div className='details-information-footer bg-fill'>
        <h1> footer</h1>
      </div>
    </Delay>
  );
};

export default JobDetails;
