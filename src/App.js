import React from 'react';
import ViewItems from './components/view-items';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends React.Component {
    render() {
        return(
            <Router>
                <Route path="/" component={ViewItems} />
            </Router>
        );
    }
}
