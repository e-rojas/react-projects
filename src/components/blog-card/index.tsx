import React from 'react';
import { Link } from 'react-router-dom';
import Blog from '../../types/Blog';

interface BlogCardProps {
    blog: Blog;
    index?: number;
    className?: string;
}
export const BlogCard: React.FC<BlogCardProps> = ({ blog, index = 0 }) => {
    const { title, summary, image, sys } = blog;
    return (
        <Link
            to={`/blog/${sys.id}`}
            className='card mb-3 mt-3 grid-col-span-1 rounded-0 no-decoration'
        >
            <div className='row g-0'>
                <div className='col-12'>
                    <div className='card-body'>
                        <div className='row g-0 '>
                            <div className='col-8 align-center'>
                                <h2 className='text-muted'>{index + 1}</h2>
                            </div>
                            <div className='col-4'>
                                <img
                                    src={image.url}
                                    className='img-fluid h-100 rounded'
                                    alt={title}
                                />
                            </div>
                        </div>

                        <h5 className='card-title'>{title}</h5>
                        <p className='card-text text-muted'>{summary}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export const SimpleCard: React.FC<BlogCardProps> = ({
    blog,
    className = '',
}) => {
    const { title, summary, sys } = blog;
    return (
        <Link
            to={`/blog/${sys.id}`}
            className={`p-t no-decoration ${className}`}
        >
            <h3 className='text-white'>{title}</h3>
            <p className='text-dark-gray'>{summary}</p>
        </Link>
    );
};

export const ArticleCardHeader: React.FC<BlogCardProps> = ({ blog }) => {
    const { title, summary, image, sys } = blog;
    return (
        <article className='main-article grid-col-span-2 w-100  flex-column'>
            {image && <img src={image.url} alt={title} className='w-100' />}
            <div className='main-article__details mobile-flex-column desktop-flex-spread-center p-1'>
                <h1 className='flex-1 heading-xl text-center'>{title} </h1>
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
