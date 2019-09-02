import ApolloClient from 'apollo-boost';

// const cache = new InMemoryCache();
const accesstoken = process.env.REACT_APP_MULTICYCLES_API_TOKEN;

console.log('accesstoke', accesstoken)

const mcClient = new ApolloClient({
  uri: `https://api.multicycles.org/v1?access_token=${accesstoken}`
});

export default mcClient;
