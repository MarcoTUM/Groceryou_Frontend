import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import StartpageView from './views/HomeView';
import ShopSelectionView from './views/ShopSelectionView';
import HelpView from './views/HelpView';
import AcceptRequestView from './views/AcceptRequestView';
<<<<<<< HEAD
import CourierView from './views/CourierView';
import UserLoginView from './views/UserLoginView';
import UserRegisterView from './views/UserRegisterView';
import CheckoutView from './views/CheckoutView';
import NavBar from "./components/NavBar";
import SubNavBar from "./components/SubNavBar";
import Confirmation from "./views/Confirmation";
import PlacedRequestsView from './views/PlacedRequestsView';
import ShopView from './views/ShopView';
=======
import UserLoginView from './views/UserLoginView';
import UserRegisterView from './views/UserRegisterView';
>>>>>>> Navbar now only with login and register button, fixed AcceptRequest scrollbar bug.

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
                    <NavBar/>
                    <SubNavBar/>
                    <Switch>
                        <Route exact path="/" component={StartpageView} />
                        <Route path="/shopselection" component={ShopSelectionView} />
                        <Route path='/shop' component={ShopView}/>
                        <Route path="/help" component={HelpView} />
                        <Route path="/acceptRequest" component={AcceptRequestView} />
<<<<<<< HEAD
                        <Route path="/courier" component={CourierView} />
                        <Route path="/login" component={UserLoginView} />
                        <Route path="/register" component={UserRegisterView} />
                        <Route path="/checkout" component={CheckoutView} />
                        <Route path="/placedRequests" component={PlacedRequestsView} />
                        <Route path="/confirmation" component={Confirmation} />
=======
                        <Route path="/login" component={UserLoginView} />
                        <Route path="/register" component={UserRegisterView} />
>>>>>>> Navbar now only with login and register button, fixed AcceptRequest scrollbar bug.
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
