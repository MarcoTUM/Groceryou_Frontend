import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import StartpageView from './views/HomeView';
import ShopSelectionView from './views/ShopSelectionView';
import ShopView from './views/ShopView';
import HelpView from './views/HelpView';
import ShopperView from './views/ShopperView';
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
                        <Route exact path="/" exact={true} component={StartpageView} />
                        <Route path="/shopselection" component={ShopSelectionView} />
                        <Route path="/shop" component={ShopView}/>
                        <Route path="/help" component={HelpView} />
                        <Route path="/shopper" component={ShopperView} />
                        <Route path="/login" component={UserLoginView} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;