import React from 'react';
import useFetchGraphqlQuery from '../hooks/useFetchGraphqlQuery';
import { useParams } from 'react-router-dom';
import Blog from '../types/Blog';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { renderOptions } from '../utils';
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
    <div className=' w-100 p-3'>
      <h1>Blog Data</h1>
      {documentToReactComponents(
        data?.blog.content.json,
        renderOptions(data?.blog.content)
      )}
    </div>
  );
};

interface QueryProps {
  blog: Blog;
}

export default BlogDetails;
