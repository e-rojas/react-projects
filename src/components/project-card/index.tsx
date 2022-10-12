import React from 'react';
import { Link } from 'react-router-dom';
import './project-card.css';
interface Props {
  title: string;
  url: string;
  id: string;
}
const ProjectCard: React.FC<Props> = ({ url, title, id }) => {
  return (
    <Link to={`/projects/${id}`} className='project_card_container '>
      <img src={url} alt='none' className='project_card_container-image' />
      <div className='overlay'>
        <div className='overlay-content'>
          <span>{title} </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
