import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Project from '../types/Project';
const ProjectDetails: React.FC = () => {
    const { id } = useParams();
    const query = `
  {
   project(id:"${id}") {
     title
     description
     tags
     inProgress
     brief
     link
     image{
       url
     }
   }
 }
 `;

    const { data, loading, error } = useFetchGraphQLQuery<QueryProps>(query);
    console.log(data);

    if (loading || !data) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    const {
        project: { title, image, description, inProgress, tags, brief, link },
    } = data as QueryProps;

    return (
        <div className='bg-slate-200 p-3'>
            <section className='_main-content bg-white rounded p-1 grid grid-cols-1 md:grid-cols-2 gap-2'>
                <div className='_tags p-1 flex flex-col'>
                    <div className='flex flex-row items-center mb-2'>
                        <span
                            style={{ fontSize: '8px' }}
                            className='inline-flex items-center py-1 px-2 m-0 font-sans rounded-2xl font-bold tracking-wider leading-normal text-center text-white uppercase align-baseline bg-indigo-800'
                        >
                            {inProgress ? 'In Progress' : 'Completed'}
                        </span>
                        {tags.map((tag, index) => {
                            const txtColor = [
                                'text-orange-500',
                                'text-yellow-500',
                                'text-blue-500',
                            ];
                            return (
                                <span
                                    style={{ fontSize: '12px' }}
                                    key={index}
                                    className={`ml-2 font-bold ${txtColor[index]}`}
                                >
                                    {tag}
                                </span>
                            );
                        })}
                    </div>
                    <h1 className='text-base font-bold'>{title}</h1>
                    <p>{description}</p>
                    <p>{brief}</p>
                    <Link
                        className='no-underline decoration-current text-right'
                        to={`/${link}`}
                    >
                        Visit App
                    </Link>
                </div>
                <div className='flex flex-col items-center  border-[0] md:border-l-2 border-solid border-slate-200 p-2'>
                    <img className='rounded' src={image.url} alt={title} />
                </div>
            </section>
            <div></div>
        </div>
    );
};

interface QueryProps {
    project: Project;
}

export default ProjectDetails;

const url = process.env.REACT_APP_GRAPHQL_ENDPOINT as string;
function useFetchGraphQLQuery<T>(query: string) {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState<Boolean>();
    const [error, setError] = useState<Error>();

    useEffect(() => {
        setLoading(true);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        })
            .then((res) => res.json())
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [query]);

    return { data, loading, error };
}
