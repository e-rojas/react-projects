import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import {useProject} from '../graphql//hooks';
const ProjectDetails: React.FC = () => {
    const { id } = useParams();
    const { data, loading, error } = useProject(id as string);
  

    if (loading) return <Loading className='py-56' />;
    if (error) return <div>Error</div>;
    const {
        project: { title, image, description, inProgress, tags, brief, link },
    } = data ;

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

export default ProjectDetails;