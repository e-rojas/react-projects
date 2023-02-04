import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderOptions } from '../utils';
import Delay from '../components/Delay.animation';
import {useBlogContent} from '../graphql/hooks'
import Loading from '../components/Loading';
import Blog from '../types/Blog';
import {IoChevronForwardCircle, IoChevronBackCircle} from 'react-icons/io5'
import { Divider } from '../components/home-page/Divider';
const BlogDetails: React.FC = () => {
    const { id } = useParams();

    const { data, loading, error } = useBlogContent(id as string);
    const blogs = data?.blogCollection.items;
    
    if (loading) return <Loading className='py-56' />;
    if (error) return <div>Error</div>;

    return (
        <Delay delay={300}>
            <div className=' w-100 p-4'>
                <section className='grid grid-cols-3'>
                    <div className='col-span-2 md:col-span-2'>
                        {data?.blog && (
                            <div>
                                <h1>{data?.blog.title}</h1>
                                <h3>By: {data?.blog.author}</h3>
                                <h5>
                                    {new Date(data?.blog.date).toDateString()}
                                </h5>
                            </div>
                        )}
                    </div>
                    <div className='col-span-1 flex flex-col justify-center items-center'>
                        <img
                            className='rounded'
                            src={data?.blog.image.url}
                            alt=''
                        />
                    </div>
                </section>
                {documentToReactComponents(
                    data?.blog.content.json,
                    renderOptions(data?.blog.content),
                )}
            </div>
            <Divider />
            <BlogFooter blogs={blogs} id={id as string} />
        </Delay>
    );
};


export default BlogDetails;

const prevBlog = (blogs:Blog[], id:string) => {
    const index = blogs.findIndex((blog) => blog.sys.id === id);
    if (index === 0) return blogs[blogs.length - 1];
    return blogs[index - 1];
};

const nextBlog = (blogs:Blog[], id:string) => {
    const index = blogs.findIndex((blog) => blog.sys.id === id);
    if (index === blogs.length - 1) return blogs[0];
    return blogs[index + 1];
};

const BlogFooter: React.FC<{ blogs: Blog[]; id: string }> = ({
    blogs,
    id,
}) => {
    const prev = prevBlog(blogs, id);
    const next = nextBlog(blogs, id);
    return (
        <div className='grid p-2 grid-cols-2'>
            <Link to={`/blog/${prev.sys.id}`} className='no-underline col-span-1 flex flex-row items-center justify-start p-1 cursor-pointer hover:bg-violet-50 rounded'>
              <IoChevronBackCircle className='text-2xl md:text-4xl text-sky-700'/>
              <h5 className='mt-2 ml-2 text-slate-400 text-sm md:text-base'>{prev.title}</h5>
            </Link>
            <Link to={`/blog/${next.sys.id}`} className='no-underline col-span-1 flex flex-row items-center justify-start p-1 cursor-pointer hover:bg-violet-50 rounded'>
              <IoChevronForwardCircle className='text-2xl md:text-4xl text-sky-700'/>
              <h5 className='mt-2 ml-2 text-slate-400 text-sm md:text-base'>{next.title}</h5>
            </Link>
            
        </div>
    );
};
