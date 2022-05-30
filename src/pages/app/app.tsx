import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import Quiz from './quiz';
import Success from './success';
import Summary from './summary';
import Checkout from './checkout';
import Landing from 'pages/index';

const App = () => {
    return (
        <Router basepath="/app">
            <RouterPage pageComponent={<Landing />} path="/" />
            <RouterPage pageComponent={<Quiz />} path="/quiz" />
            <RouterPage pageComponent={<Success />} path="/success" />
            <RouterPage pageComponent={<Summary />} path="/summary" />
            <RouterPage pageComponent={<Checkout />} path="/checkout" />
        </Router>
    );
};

export default App;

const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
