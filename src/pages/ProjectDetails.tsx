import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchGraphqlQuery from '../hooks/useFetchGraphqlQuery';
import Project from '../types/Project';
const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const query = `
  {
   project(id:"${id}") {
     title
     description
     tags
     image{
       url
     }
   }
 }
 `;

  const { data, loading, error } = useFetchGraphqlQuery<QueryProps>(query);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <h1>{data?.project.title}</h1>
      <div>
        <p>{data?.project.description}</p>
        <img src={data?.project.image.url} alt='none' />
      </div>
    </div>
  );
};

interface QueryProps {
  project: Project;
}

export default ProjectDetails;
