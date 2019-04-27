import React,{Component } from 'react';
import './Mega.css';

class Mega extends Component {
    render() {
        return (
            <div>
            <div className="container mega-evol">
                <div className="col-md-12 mega-intro">
                    <h1>Mega Evolution Cards</h1>
                    <p>Mega Evolutions are only compatible with Pokémon-EX cards, which is interesting, because EX cards sort of already did what Mega Evolutions do: they're suped-up, more powerful versions of existing Pokémon.</p>
                </div>



                <div className="row mega-info">
                    <div className="col-md-5">
                        <img src="img/M-Venusaur.png" alt="M-Venusaur" />
                    </div>
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header bg-dark"><h1>M Venusaur-EX</h1></div>
                            <div className="header-content">
                                <div>
                                    <h1>MEGA</h1>
                                    <h1>HP 230
                                        <img src="img/grass-icon.png" alt="grass-icon" />
                                    </h1>
                                </div>
                                <h1>Evolves From: Venusaur-EX</h1>
                            </div>
                            <div className="card-body">
                                When a Pokemon-EX has been Knocked Out, your opponent takes 2 Prize cards.
                                <h2>Mega Evolution rule</h2>
                                When 1 of your Pokemon becomes a Mega Evolution Pokemon, your turn ends.
                                <h2><img src="img/Mvenusaur-crisisvine.png" alt="Mvenusaur-crisisvine" />Crisis Vine</h2>
                                Your opponent's Active Pokemon is now Paralyzed and Poisoned.
                                <div className="progress">
                                    <div className="progress-bar bg-success hp">HP</div>
                                    <div className="progress-bar bg-danger atk">Attack </div>
                                    <div className="progress-bar bg-primary def">Defense</div>
                                    <div className="progress-bar bg-warning spatk">SpAtk</div>
                                    <div className="progress-bar bg-info spdef">SpDef</div>
                                    <div className="progress-bar bg-dark sp">Speed</div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div>
                                    <h2>Weakness</h2>
                                    <h2>Resistance</h2>
                                    <h2>Retreat Cost</h2>
                                </div>
                                <div>
                                    <h1><img src="img/fire-icon.png" alt="fire-icon" />X2</h1>
                                    <img src="img/retreacost4.png" alt="retreacost4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mega-info">                    
                    <div className="col-md-7">
                        <div className="card mega-evol">
                            <div className="card-header bg-dark"><h1>M Charizard-EX</h1></div>
                            <div className="header-content">
                                <div>
                                    <h1>MEGA</h1>
                                    <h1>HP 230
                                        <img src="img/dragon-icon.png" alt="dragon-icon" />
                                    </h1>
                                </div>
                                <h1>Evolves From: Charizard-EX</h1>
                            </div>
                            <div className="card-body">
                                When a Pokemon-EX has been Knocked Out, your opponent takes 2 Prize cards.
                                <h2>Mega Evolution rule</h2>
                                When 1 of your Pokemon becomes a Mega Evolution Pokemon, your turn ends.
                                <h2><img src="img/charizards-wild.png" alt="charizards-wild" />Wild Blaze</h2>
                                Discard the top 5 cards of your deck.
                                <div className="progress">
                                    <div className="progress-bar bg-success hp">HP</div>
                                    <div className="progress-bar bg-danger atk">Attack </div>
                                    <div className="progress-bar bg-primary def">Defense</div>
                                    <div className="progress-bar bg-warning spatk">SpAtk</div>
                                    <div className="progress-bar bg-info spdef">SpDef</div>
                                    <div className="progress-bar bg-dark sp">Speed</div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div>
                                    <h2>Weakness</h2>
                                    <h2>Resistance</h2>
                                    <h2>Retreat Cost</h2>
                                </div>
                                <div>
                                    <h1><img src="img/fairy-icon.png" alt="fairy-icon" />X2</h1>
                                    <img src="img/retreacost3.png" alt="retreacost3" />
                                </div>
                            </div>
                        </div> 
                    </div>
                    

                    <div className="col-md-5">
                        <img src="img/M-Charizard.png" alt="M-Venusaur" />
                    </div>
                </div>

                <div className="row mega-info">
                    <div className="col-md-5">
                        <img src="img/M-Blastoise.png" alt="M-Blastoise" />
                    </div>
                    <div className="col-md-7">
                        <div className="card">
                            <div className="card-header bg-dark"><h1>M Blastoise-EX</h1></div>
                            <div className="header-content">
                                <div>
                                    <h1>MEGA</h1>
                                    <h1>HP 220
                                        <img src="img/water-icon.png" alt="water-icon" />
                                    </h1>
                                </div>
                                <h1>Evolves From: Blastoise-EX</h1>
                            </div>
                            <div className="card-body">
                                When a Pokemon-EX has been Knocked Out, your opponent takes 2 Prize cards.
                                <h2>Mega Evolution rule</h2>
                                When 1 of your Pokemon becomes a Mega Evolution Pokemon, your turn ends.
                                <h2><img src="img/blastoise-hydro.png" alt="blastoise-hydro" />Hydro Bombard</h2>
                                This attack does 30 damage to 2 of your opponent's Benched Pokémon.
                                <div className="progress">
                                    <div className="progress-bar bg-success hp">HP</div>
                                    <div className="progress-bar bg-danger atk">Attack </div>
                                    <div className="progress-bar bg-primary def">Defense</div>
                                    <div className="progress-bar bg-warning spatk">SpAtk</div>
                                    <div className="progress-bar bg-info spdef">SpDef</div>
                                    <div className="progress-bar bg-dark sp">Speed</div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div>
                                    <h2>Weakness</h2>
                                    <h2>Resistance</h2>
                                    <h2>Retreat Cost</h2>
                                </div>
                                <div>
                                    <h1><img src="img/grass-icon.png" alt="grass-icon" />X2</h1>
                                    <img src="img/retreacost3.png" alt="retreacost3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 background-3">
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

export default Mega;