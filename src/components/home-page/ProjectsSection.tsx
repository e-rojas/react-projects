import React from 'react';
import { Link } from 'react-router-dom';
import useFetchGraphqlQuery from '../../hooks/useFetchGraphqlQuery';
import Project from '../../types/Project';

const ProjectsSection: React.FC = () => {
  const { data, loading, error } = useFetchGraphqlQuery<QueryProps>(query);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <div className='px-2'>
      <h1 className='text-4 mb-2 font-bold mt-5 ml-2'>Projects</h1>
      <section className='grid grid-cols-1 grid-cols-4 md:grid-cols-5 gap-2 px-3 md:px-2 mt-2 mb-6'>
        {data?.projectCollection.items.map((project) => (
          <ProjectCard
            key={project.sys.id}
            title={project.title}
            url={project.image.url}
            id={project.sys.id}
          />
        ))}
      </section>
    </div>
  );
};

export default ProjectsSection;

const ProjectCard: React.FC<{ url: string; title: string; id: string }> = ({
  url,
  title,
  id,
}) => {
  return (
    <Link
      style={{
        height: '150px',
        backgroundImage: `url(${url})`,
      }}
      to={`/projects/${id}`}
      className='col-span-2 md:col-span-1 no-underline decoration-current text-current rounded'
    >
      <div className='_overlay rounded'>
        <span>
          <h1 className='text-xl font-thin text-center text-white'>{title}</h1>
        </span>
      </div>
    </Link>
  );
};

interface QueryProps {
  projectCollection: {
    items: Project[];
  };
}

const query = `
      {
        projectCollection(order: title_ASC) {
          items {
            sys{
              id
            }
            title
            description
            tags
            image {
              url
            }
          }
        }
      }
      `;
