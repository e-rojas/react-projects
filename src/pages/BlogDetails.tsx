import React from 'react';
import useFetchGraphqlQuery from '../hooks/useFetchGraphqlQuery';
import { useParams } from 'react-router-dom';
import Blog from '../types/Blog';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderOptions } from '../utils';
import Delay from '../components/Delay.animation';
const BlogDetails: React.FC = () => {
    const { id } = useParams();
    const query = `
    {
        blog(id:"${id}") {
          sys {
            id
          }
          title
          content {
            json
            links{
              assets{
                block{
                  url
                  title
                  sys{
                    id
                  }
                }
              }
            }

          }
          date
          image {
            url
          }
          author
          summary
        }
      }
    `;

    const { data, loading, error } = useFetchGraphqlQuery<QueryProps>(query);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    return (
        <Delay delay={500}>
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
        </Delay>
    );
};

interface QueryProps {
    blog: Blog;
}

export default BlogDetails;
