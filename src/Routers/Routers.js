import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../Home';
import Memory from "../components/Memory/Memory";
import Memory2 from "../components/Memory/Memory2";
import Signup from "../components/Signup/Signup";
import Signin from '../components/Signin/Signin';
import Database from '../components/Database/Database';


class Routers extends Component {
    render() {
        return(
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/memory" component={Memory} />
                        <Route path="/memory2" component={Memory2} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/database" component={Database} />
                        <Route component={Home} />
                    </Switch>
                </div>
        );
    }
}

export default Routers;