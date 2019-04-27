import React, {Component} from 'react';
import './Backtop.css';

class Backtop extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 backtop">
                        <a href="#header"><div className="pokeball">
                            <div className="water"></div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Backtop;