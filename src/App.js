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
import AcceptRequestView from './views/AcceptRequestView';
import UserLoginView from './views/UserLoginView';
import UserRegisterView from './views/UserRegisterView';
import CheckoutView from './views/CheckoutView';
import Checkout from './components/CheckoutPage';

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
                        <Route path="/acceptRequest" component={AcceptRequestView} />
                        <Route path="/login" component={UserLoginView} />
                        <Route path="/register" component={UserRegisterView} />
                        <Route path="/checkout" component={CheckoutView} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;