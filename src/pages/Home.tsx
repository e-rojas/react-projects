import React from 'react';
import Blog from '../types/Blog';
import useFetchGraphqlQuery from '../hooks/useFetchGraphqlQuery';
import {
  SimpleCard,
  BlogCard,
  ArticleCardHeader,
} from '../components/blog-card';
import Delay from '../components/Delay.animation';

const Home: React.FC = () => {
  const { data, loading, error } = useFetchGraphqlQuery<QueryProps>(query);
  const { items } = data?.blogCollection || { items: [] };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <Delay delay={500} className='w-100'>
      {items && items.length > 0 && (
        <section className='grid-3 w-100 p-1'>
          <ArticleCardHeader blog={items[0]} />
          <section className='grid-col-span-1 bg-dark-space-blue p-2 flex-column-spread'>
            <h1 className='text-yellow'>New</h1>

            {items.slice(1, 4).map((item, index, array) => (
              <SimpleCard
                key={item.sys.id}
                blog={item}
                className={`${
                  index === array.length - 1 ? 'border-none' : 'border-bottom'
                }`}
              />
            ))}
          </section>
        </section>
      )}
      <section className='grid-3 w-100 m-t-3 p-2 bg-soft-gray'>
        {items.slice(4).map((item, index) => (
          <BlogCard key={item.sys.id} blog={item} index={index} />
        ))}
      </section>
    </Delay>
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
export default Home;
