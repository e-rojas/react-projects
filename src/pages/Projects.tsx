import React from 'react';
import Delay from '../components/Delay.animation';
import ProjectCard from '../components/project-card';
import useFetchGraphqlQuery from '../hooks/useFetchGraphqlQuery';
import Project from '../types/Project';
type Props = {};

const Projects = (props: Props) => {
  const { data, loading, error } = useFetchGraphqlQuery<QueryProps>(query);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  return (
    <Delay delay={500}>
      <section className='grid-5 p'>
        {data?.projectCollection.items.map((item) => (
          <ProjectCard
            key={item.sys.id}
            title={item.title}
            url={item.image.url}
            id={item.sys.id}
          />
        ))}
      </section>
    </Delay>
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

export default Projects;
