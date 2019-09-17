import React from 'react';
import ReactDOM from 'react-dom';
import { Constant } from './commons/constant';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
const container = document.getElementById('app');

const client = new ApolloClient({
    uri: Constant.envDevelopment+Constant.endpoint,
});

// ReactDOM.render(<Course />,container);
ReactDOM.render(

        <ApolloProvider client={client}>
            <App  />
        </ApolloProvider>,container);