import React, {Component} from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return(
            <header className="container-fluid" id="header">
                <div className="row">
                    <div className="col-md-12 head">
                        <div className="head-title">
                            <h1>POKEMON</h1>
                            <h2>TRADING CARD</h2>
                            <a href="#introduce">
                                <div className="parent">
                                    <div>Let's Begin</div>
                                    <div className="one" />
                                    <div className="two" />	
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-12 hide-bot"></div>
                    <iframe title="memoryMusic2" src="/img/pokemontheme.mp3" allow="autoplay" id="audio" style={{display: 'none'}} />
                </div>

            </header>
        );
    }
}

export default Header;