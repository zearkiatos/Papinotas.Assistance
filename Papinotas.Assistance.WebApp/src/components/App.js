import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './Layout';
import CreateStudent from '../pages/CreateStudent';
import List from '../pages/List';
import Course from '../components/Course';
import NotFound from '../pages/NotFound';
function App(){

    return (
        <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/list/:courseId" component={List} />
                <Route exact path="/student/new" component={CreateStudent} />
                <Route exact path="/course" component={Course} />
                <Route exact path="/" component={Course} />
                <Route component={NotFound} />
            </Switch>
        </Layout>

        </BrowserRouter>
    );

}

export default App;