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
// blogsDetail
const BLOGS_DETAIL_FRAGMENT = gql`
    fragment blogsDetail on BlogCollection {
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

const BLOG_DETAIL_CONTENT_FRAGMENT = gql`
    fragment blogDetailContent on Blog {
        sys {
            id
        }
        content {
            json
            links {
                assets {
                    block {
                        url
                        title
                        sys {
                            id
                        }
                    }
                }
            }
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
`;

export const PROJECT_QUERY = gql`
    query Project($id: String!) {
        project(id: $id) {
            ...projectDetail
        }
        blogCollection(order: date_DESC) {
            ...blogsDetail
        }
    }
    ${PROJECT_DETAIL_FRAGMENT}
    ${BLOGS_DETAIL_FRAGMENT}
`;

export const BLOGS_QUERY = gql`
    query {
        blogCollection(order: date_DESC) {
            ...blogsDetail
        }
    }
    ${BLOGS_DETAIL_FRAGMENT}
`;

export const BLOG_QUERY_CONTENT = gql`
    query Blog($id: String!) {
        blog(id: $id) {
            ...blogDetailContent
        }
        blogCollection(order: date_DESC) {
            ...blogsDetail
        }
    }
    ${BLOG_DETAIL_CONTENT_FRAGMENT}
    ${BLOGS_DETAIL_FRAGMENT}
`;
