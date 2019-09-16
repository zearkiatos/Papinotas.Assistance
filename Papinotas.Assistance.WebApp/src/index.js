import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';
import List from './pages/List';
import CreateStudent from './pages/CreateStudent';
import { Constant } from './commons/constant';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
const container = document.getElementById('app');

const client = new ApolloClient({
    uri: Constant.envDevelopment+Constant.endpoint,
});

// ReactDOM.render(<Course />,container);
ReactDOM.render(
<ApolloProvider client={client}>
    <Course  />
</ApolloProvider>
    ,container);