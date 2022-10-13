import React from 'react';
import Blog from '../types/Blog';
import useFetchGraphqlQuery from '../hooks/useFetchGraphqlQuery';
import { BlogCard } from '../components/blog-card';

const Home: React.FC = () => {
  const { data, loading, error } = useFetchGraphqlQuery<QueryProps>(query);
  const { items } = data?.blogCollection || { items: [] };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <section className='grid-4 w-100'>
      {items.map((item) => (
        <div key={item.sys.id} className='grid-col-span-1 center'>
          <BlogCard {...item} />
        </div>
      ))}
    </section>
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
