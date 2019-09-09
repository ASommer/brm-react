import ApolloClient from 'apollo-boost';

const accesstoken = process.env.REACT_APP_MULTICYCLES_API_TOKEN;

const mcClient = new ApolloClient({
  uri: `https://api.multicycles.org/v1?access_token=${accesstoken}`
});

export default mcClient;
