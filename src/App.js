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
import CourierView from './views/CourierView';
import UserLoginView from './views/UserLoginView';
import UserRegisterView from './views/UserRegisterView';
import NavBar from "./components/NavBar";
import SubNavBar from "./components/SubNavBar";

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
                        <Route exact path="/" exact={true} component={StartpageView} />
                        <Route path="/shopselection" component={ShopSelectionView} />
                        <Route path="/shop" component={ShopView}/>
                        <Route path="/help" component={HelpView} />
                        <Route path="/acceptRequest" component={AcceptRequestView} />
                        <Route path="/courier" component={CourierView} />
                        <Route path="/login" component={UserLoginView} />
                        <Route path="/register" component={UserRegisterView} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
