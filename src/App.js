import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import StartpageView from './views/HomeView';
import UserLoginView from './views/UserLoginView';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Groceryou",
        };
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={StartpageView} />
                        <Route path="/login" component={UserLoginView} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;