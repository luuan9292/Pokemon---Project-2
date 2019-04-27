import React, {Component} from 'react';
import './Memory.css';
import Menu from '../Menu/Menu';

class Memory2 extends Component {
    render() {
        return(
            <section className="memory">
                <Menu />
                <div className="background__memory--second"></div>
                <div className="memory-game">
                <div className="memory-card" data-framework="card-8">
                        <img className="front-face" src="./cards/card-8.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-8">
                        <img className="front-face" src="./cards/card-8.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-11">
                        <img className="front-face" src="./cards/card-11.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-11">
                        <img className="front-face" src="./cards/card-11.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-39">
                        <img className="front-face" src="./cards/card-39.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-39">
                        <img className="front-face" src="./cards/card-39.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-57">
                        <img className="front-face" src="./cards/card-57.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-57">
                        <img className="front-face" src="./cards/card-57.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-59">
                        <img className="front-face" src="./cards/card-59.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-59">
                        <img className="front-face" src="./cards/card-59.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-61">
                        <img className="front-face" src="./cards/card-61.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-61">
                        <img className="front-face" src="./cards/card-61.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-63">
                        <img className="front-face" src="./cards/card-63.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-63">
                        <img className="front-face" src="./cards/card-63.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-64">
                        <img className="front-face" src="./cards/card-64.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-64">
                        <img className="front-face" src="./cards/card-64.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-82">
                        <img className="front-face" src="./cards/card-82.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-82">
                        <img className="front-face" src="./cards/card-82.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-87">
                        <img className="front-face" src="./cards/card-87.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-87">
                        <img className="front-face" src="./cards/card-87.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-51">
                        <img className="front-face" src="./cards/card-51.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-51">
                        <img className="front-face" src="./cards/card-51.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-93">
                        <img className="front-face" src="./cards/card-93.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-93">
                        <img className="front-face" src="./cards/card-93.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    

                    <iframe title="memoryMusic2" src="/img/pokemonok.mp3" allow="autoplay" id="audio" style={{display: 'none'}} />
                </div>
            </section>

        );
    }
}

export default Memory2;