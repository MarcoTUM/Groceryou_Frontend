import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import StartpageView from './views/HomeView';
import ShopView from './views/ShopView';
import HelpView from './views/HelpView';
import CourierView from './views/CourierView';
import UserLoginView from './views/UserLoginView';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={StartpageView} />
                        <Route path="/shop" component={ShopView} />
                        <Route path="/help" component={HelpView} />
                        <Route path="/courier" component={CourierView} />
                        <Route path="/login" component={UserLoginView} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
