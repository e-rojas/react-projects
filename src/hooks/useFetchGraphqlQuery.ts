import React from 'react';
import HttpService from '../services/HttpService';

const url = process.env.REACT_APP_GRAPHQL_ENDPOINT as string;

function useFetchGraphqlQuery<T>(query: string) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      HttpService.postQuery<T>(url, query)
        .then((response: any) => {
          setData(response.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, [query]);

  return { data, loading, error };
}

export default useFetchGraphqlQuery;
