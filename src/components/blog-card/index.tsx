import React from 'react';
import { Link } from 'react-router-dom';
interface BlogCardProps {
  title: string;
  date: Date;
  image: {
    url: string;
  };
  sys: {
    id: string;
  };
  summary: string;
}
export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  image,
  date,
  summary,
  sys,
}) => {
  return (
    <div className='card h-100' style={{ width: '14rem' }}>
      <img src={image.url} className='card-img-top' alt='...' />
      <Link to={`/blog/${sys.id}`} className='no-decoration'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <span className='card-subtitle mb-2 text-muted'>
            {new Date(date).toDateString()}{' '}
          </span>
          <p className='card-text'>{summary}</p>
        </div>
      </Link>
    </div>
  );
};
