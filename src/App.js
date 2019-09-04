import React from 'react';
import './App.css';
// import Layout from './components/Layout';
// import HomePage from './components/Page1';
// import {ApolloProvider} from 'react-apollo';
import { ApolloProvider as ApolloProviderHooks} from '@apollo/react-hooks';
import mcClient from './apollo/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomePage from './components/Home';
import AboutPage from './components/AboutPage';
import Layout from './components/Layout';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      {/* <ApolloProvider client={mcClient}> */}
      <ApolloProviderHooks client={mcClient}>
        <Header />
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/about" component={AboutPage}/>
          </Switch>
        </Layout>
        <Footer />
      </ApolloProviderHooks>
      {/* </ApolloProvider> */}    

    </BrowserRouter>
    </div>
  );
}

export default App;
