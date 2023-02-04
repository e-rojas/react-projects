import AppRouter from './router';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/queries';
function App() {
  return (
    <ApolloProvider client={client}>
   <AppRouter />
  </ApolloProvider>
  )
}

export default App;
