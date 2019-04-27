import React, { Component } from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Routers from './Routers/Routers';


class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
            <Routers></Routers>

            </div>
        </Router>
    );
  }
}

export default App;
