import { ApolloError, useQuery } from '@apollo/client';
import Blog from '../types/Blog';
import Project from '../types/Project';
import { BLOGS_QUERY, BLOG_QUERY_CONTENT, PROJECT_QUERY } from './queries';

export const useProject = (id: string):{
    data: {
        project: Project,
        blogCollection: {
            items: Blog []
        }
    } ,
    loading: boolean,
    error: ApolloError | undefined
} => {
    const {data, loading, error} = useQuery(PROJECT_QUERY, {
        variables: {id},
        });
    
    return {data, loading, error};
}

export const useBlogs = ():{
    data: {
        blogCollection: {
            items: Blog []
        }
    },
    loading: boolean,
    error: ApolloError | undefined
} =>{
    const {data, loading, error} = useQuery(BLOGS_QUERY);
    return {data, loading, error};
}

export const useBlogContent = (id: string):{
    data: {
        blog: Blog,
        blogCollection: {
            items: Blog []
        }
    },
    loading: boolean,
    error: ApolloError | undefined
} => {
    const {data, loading, error} = useQuery(BLOG_QUERY_CONTENT, {
        variables: {id},
        });
    
    return {data, loading, error};
}