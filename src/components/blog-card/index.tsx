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
  index: number;
}
export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  image,
  summary,
  sys,
  index,
}) => {
  return (
    <Link
      to={`/blog/${sys.id}`}
      className='card mb-3 mt-3 grid-col-span-1 border border-0 rounded-0 no-decoration'
    >
      <div className='row g-0'>
        <div className='col-4 '>
          <img src={image.url} className='img-fluid h-100' alt={title} />
        </div>
        <div className='col-8'>
          <div className='card-body'>
            <h2 className='text-muted'>{index + 1}</h2>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text text-muted'>
              {summary.slice(0, 55) + '...'}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

interface SimpleBlogCardProps {
  title: string;
  summary: string;
  className?: string;
  image?: {
    url: string;
  };
  sys: {
    id: string;
  };
}

export const SimpleCard: React.FC<SimpleBlogCardProps> = ({
  title,
  summary,
  className,
  sys,
}) => {
  return (
    <Link to={`/blog/${sys.id}`} className={`p-t no-decoration ${className}`}>
      <h3 className='text-white'>{title}</h3>
      <p className='text-dark-gray'>{summary}</p>
    </Link>
  );
};

export const ArticleCardHeader: React.FC<SimpleBlogCardProps> = ({
  title,
  summary,
  image,
  sys,
}) => {
  return (
    <article className='main-article grid-col-span-2 w-100  flex-column'>
      {image && <img src={image.url} alt={title} className='w-100' />}
      <div className='main-article__details mobile-flex-column desktop-flex-spread-center p-1'>
        <h1 className='flex-1 heading-xl'>{title} </h1>
        <div className='flex-1 flex-column-spread'>
          <p>{summary}</p>
          <Link
            to={`/blog/${sys.id}`}
            className='btn btn-info text-white no-decoration'
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
};
