import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';
import List from './pages/List';
import CreateStudent from './pages/CreateStudent';
import { Constant } from './commons/constant';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-client-preset';

const container = document.getElementById('app');

const httpLink = {
    uri: Constant.envDevelopment+Constant.endpoint,
}

const client = new ApolloClient({
    link: new HttpLink(httpLink),
    cache: new InMemoryCache()
});

const Root = ()=>(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

// ReactDOM.render(<Course />,container);
ReactDOM.render(<CreateStudent />,container);