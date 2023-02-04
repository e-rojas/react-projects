import { gql, ApolloClient, InMemoryCache } from '@apollo/client';

const url = process.env.REACT_APP_GRAPHQL_ENDPOINT as string;
const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
};
export const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
    headers,
    defaultOptions: {
        query: {
            fetchPolicy: 'network-only',
        },
    },
});

const PROJECT_DETAIL_FRAGMENT = gql`
    fragment projectDetail on Project {
        title
        description
        tags
        inProgress
        brief
        link
        image {
            url
        }
    }
`;

const BLOG_DETAIL_FRAGMENT = gql`
    fragment blogDetail on BlogCollection {
        items {
            sys {
                id
            }
            title
            author
            date
            summary
            tags
            image {
                url
            }
        }
    }
`;

export const PROJECT_QUERY = gql`
    query Project($id: String!) {
        project(id: $id) {
            ...projectDetail
        }
        blogCollection(order: date_DESC) {
            ...blogDetail
        }
    }
    ${PROJECT_DETAIL_FRAGMENT}
    ${BLOG_DETAIL_FRAGMENT}
`;

export const BLOGS_QUERY = gql`
    query {
        blogCollection(order: date_DESC) {
            ...blogDetail
        }
    }
    ${BLOG_DETAIL_FRAGMENT}
`;
