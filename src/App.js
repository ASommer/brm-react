import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Layout from './components/Layout';
import Page1 from './components/Page1';
// import {ApolloProvider} from 'react-apollo';
import { ApolloProvider as ApolloProviderHooks} from '@apollo/react-hooks';
import mcClient from './apollo/client';

function App() {
  return (
    <div className="App">
    {/* <ApolloProvider client={mcClient}> */}
    <ApolloProviderHooks client={mcClient}>
      <Page1 />
    </ApolloProviderHooks>
    {/* </ApolloProvider> */}    
    </div>
  );
}

export default App;
