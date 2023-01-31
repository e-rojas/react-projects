import React from 'react';
import { Link } from 'react-router-dom';
import useFetchGraphqlQuery from '../../hooks/useFetchGraphqlQuery';
import Blog from '../../types/Blog';

export default function BlogSection() {
  const { data, loading, error } = useFetchGraphqlQuery<QueryProps>(query);
  const { items: blogs } = data?.blogCollection || { items: [] };
  if (loading || !blogs.length) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const blogHeading = blogs[0];
  const blogArticles = blogs.slice(1, 4);
  return (
    <>
      <div className='px-3'>
        <h1 className='text-4 mb-2 font-bold mt-5'>Personal Blog</h1>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 p-1 w-full p-4'>
          <ArticleHeader displayImage={true} blog={blogHeading} />
          <section className='md:col-span-1 flex flex-col justify-between'>
            {blogArticles.map((blog, index, array) => (
              <ArticleCard key={blog.sys.id} blog={blog} />
            ))}
          </section>
        </section>
      </div>
      <div className='p-3'>
        <section className='blog-cards bg-slate-100 rounded grid grid-cols-1 md:grid-cols-3 gap-2'>
          {blogs.slice(4).map((blog, index) => (
            <BlogCard key={blog.sys.id} blog={blog} index={index} />
          ))}
        </section>
      </div>
    </>
  );
}

const ArticleHeader: React.FC<{ displayImage: boolean; blog: Blog }> = ({
  displayImage,
  blog,
}) => {
  return (
    <Link
      to={`/blog/${blog.sys.id}`}
      className='no-underline decoration-current text-current'
    >
      <article className='md:col-span-1 flex flex-col px-3 md:px-6'>
        {displayImage && (
          <img
            src={blog.image.url}
            alt='blog'
            className='w-full h-64 object-cover rounded'
          />
        )}
        <h1 className='text-3xl mb-2 font-thin text-center'>{blog.title}</h1>
        <p className='text-xl mb-4'>{blog.summary}</p>
      </article>
    </Link>
  );
};

interface ArticleCardProps {
  blog: Blog;
}

const ArticleCard = ({ blog }: ArticleCardProps) => {
  return (
    <Link
      to={`/blog/${blog.sys.id}`}
      className='no-underline decoration-current text-current'
    >
      <article className=' p-3 mb-2 bg-black rounded'>
        <h1 className='flex-1 heading-lg text-white'>{blog.title} </h1>
        <p className='flex-1 text-slate-400'>{blog.summary}</p>
      </article>
    </Link>
  );
};

const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  return (
    <Link
      to={`/blog/${blog.sys.id}`}
      className='no-underline  text-current bg-white rounded m-2 md:col-span-1 hover:shadow-xl transition duration-100 ease-in transform hover:-translate-y-1 hover:scale-103'
    >
      <article className=' p-2 grid grid-cols-3 gap-2'>
        <h3 className='col-span-2 text-xl md:text-base  flex flex-row justify-start items-center text-black '>
          {blog.title}
        </h3>

        <div className='col-span-1 py-2'>
          <img
            className='col-span-1 py-2 rounded-xl h-full'
            src={blog.image.url}
            alt={blog.title}
          />
        </div>
        <p className='col-span-3 text-gray-400 text-lg'>{blog.summary}</p>
      </article>
    </Link>
  );
};

interface QueryProps {
  blogCollection: {
    items: Blog[];
  };
}

const query = `
query{
  blogCollection(order:date_DESC){
    items{
      sys{
        id
      }
      title
      date
      image{
        url
      }
      summary
      tags
    }
  }
}
`;
