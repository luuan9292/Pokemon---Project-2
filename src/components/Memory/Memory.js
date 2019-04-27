import React, {Component} from 'react';
import './Memory.css';
import './MemoryJS.js';
import Menu from '../Menu/Menu';

class Memory extends Component {
    render() {
        return(
            <section className="memory">
                <Menu />
                <div className="background__memory--first"></div>
                <div className="memory-game">
                                   
                    <div className="memory-card" data-framework="card-4">
                        <img className="front-face" src="./cards/card-4.png" alt="card"/>
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-4">
                        <img className="front-face" src="./cards/card-4.png" alt="card"/>
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-10">
                        <img className="front-face" src="./cards/card-10.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-10">
                        <img className="front-face" src="./cards/card-10.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-41">
                        <img className="front-face" src="./cards/card-41.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-41">
                        <img className="front-face" src="./cards/card-41.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-44">
                        <img className="front-face" src="./cards/card-44.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-44">
                        <img className="front-face" src="./cards/card-44.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-58">
                        <img className="front-face" src="./cards/card-58.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-58">
                        <img className="front-face" src="./cards/card-58.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-60">
                        <img className="front-face" src="./cards/card-60.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-60">
                        <img className="front-face" src="./cards/card-60.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-65">
                        <img className="front-face" src="./cards/card-65.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-65">
                        <img className="front-face" src="./cards/card-65.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-69">
                        <img className="front-face" src="./cards/card-69.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-69">
                        <img className="front-face" src="./cards/card-69.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-81">
                        <img className="front-face" src="./cards/card-81.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-81">
                        <img className="front-face" src="./cards/card-81.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-85">
                        <img className="front-face" src="./cards/card-85.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-85">
                        <img className="front-face" src="./cards/card-85.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-66">
                        <img className="front-face" src="./cards/card-66.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-66">
                        <img className="front-face" src="./cards/card-66.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-101">
                        <img className="front-face" src="./cards/card-101.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>
                    <div className="memory-card" data-framework="card-101">
                        <img className="front-face" src="./cards/card-101.png" alt="card" />
                        <img className="back-face" src="./cards/backcard.png" alt="backcard" />
                    </div>

                    <iframe title="memoryMusic1" src="/img/pokemon20th.mp3" allow="autoplay" id="audio" style={{display: 'none'}} />
                </div>
            </section>

        );
    }
}

export default Memory;