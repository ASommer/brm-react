import React from 'react';
import './App.css';
import { ApolloProvider as ApolloProviderHooks } from '@apollo/react-hooks';
import mcClient from './apollo/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Main from '././components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ApolloProviderHooks client={mcClient}>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </Main>
          <Footer />
        </ApolloProviderHooks>
      </BrowserRouter>
    </div>
  );
}

export default App;
