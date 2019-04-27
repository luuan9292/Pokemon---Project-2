import React, {Component} from 'react';
import './Tagteam.css';

class Tagteam extends Component {
    render() {
        return(
            <div className="container-fluid tag__team">
                <div className="row">
                    <div className="col-md-4">
                        <img src="./img/Pikachu&Zekrom.png" alt="Pikachu" />
                    </div>
                    <div className="col-md-8 tag__team__info">
                        <h1>PIKACHU</h1>
                        <h3>Pokemon-TAG TEAM</h3>
                        <p>If this Pokemon has at least 3 extra Lightning Energy attached to it (in addition to this attack's cost), this attack does 170 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can’t use more than 1 GX attack in a game.)</p>
                        <p>Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.</p>

                        <img src="./img/Pikachu&Zekrom2.png" alt="Zekrom2" />
                        <div className="container">
                            <div className="box">
                                <div className="chart" data-percent={30}><i className="fas fa-bolt" /></div>
                                <h2>HP</h2>
                            </div>
                            <div className="box">
                                <div className="chart" id="chart2" data-percent={40}><i className="fas fa-bolt" /></div>
                                <h2>Atk</h2>
                            </div>
                            <div className="box">
                                <div className="chart" id="chart3" data-percent={35}><i className="fas fa-bolt" /></div>
                                <h2>Def</h2>
                            </div>
                            <div className="box">
                                <div className="chart" id="chart4" data-percent={80}><i className="fas fa-bolt" /></div>
                                <h2>Speed</h2>
                            </div>
                            <div className="box">
                                <div className="chart" id="chart5" data-percent={65}><i className="fas fa-bolt" /></div>
                                <h2>SpAtk</h2>
                            </div>
                        </div>

                        <h3>Rating</h3>
                        <div className="rating">
                        <input type="radio" name="star" id="first__star" /><label htmlFor="first__star"></label>
                        <input type="radio" name="star" id="second__star" /><label htmlFor="second__star"></label>
                        <input type="radio" name="star" id="third__star" /><label htmlFor="third__star"></label>
                        <input type="radio" name="star" id="fourth__star" /><label htmlFor="fourth__star"></label>
                        <input type="radio" name="star" id="fifth__star" /><label htmlFor="fifth__star"></label>
                        </div>

                    </div>
                </div>
                
            </div>

        );
    }
}

export default Tagteam