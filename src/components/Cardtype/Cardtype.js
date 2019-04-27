import React, { Component } from 'react';
import './Cardtype.css';

class Cardtype extends Component {
    render() {
        return(
            <section className="container-fluid">

                <div className="row card-type">
                    <div className="col-md-6 pkm-info">
                        <h1>Pokemon Cards</h1>
                        Each card has a name, a type, and an amount of health points (HP). Players play these cards on the field and use that creature's attacks to reduce the opponent's HP. When a Pokémon's HP is reduced to 0, it is knocked out and the player who knocked it out takes a prize card into their hand.
                    </div>
                    <div className="col-md-12 pkm-img">
                        <img src="./img/Pokemon-Card-Type.png" alt="Pokemon-Card-Type" />
                    </div>

                    <div className="col-md-6 trainer-info">
                        <h1>Trainer Cards</h1>
                        <p>Trainer cards represent the Items, Supporters, and
                        Stadiums a Trainer can use in battle. You can see
                        the specifc Trainer subtype in the upper-right
                        corner and any special rules for that subtype at the
                        bottom of the card.</p>
                    </div>
                    <div className="col-md-12 trainer-img">
                        <img src="./img/Trainer-Card-Type.png" alt="Trainer-Card-Type" />
                    </div>
                </div>
          
                <div className="row energy-card-type ">


                    <div className="col-md-6 energy-info">
                        <h1>Energy Cards</h1>
                        <p>Most of the time, Pokémon can’t attack without
                        Energy cards! You’ll need to match the symbols of
                        the attack cost to the Energy card, but any type of
                        Energy can be used for Colorless.</p>
                    </div>
                    <div className="col-md-12 energy-img">
                        <div className="type-info">
                            <div className="frame__img">
                                <img src="./img/frame__img.png" alt="frame__img"/>
                                <img src="./img/Energy-1.png" alt="Energy-1" />
                            </div>                           
                            <div className="frame__info">   
                                <img src="./img/frame__info.png" alt="frame__info" />                          
                                <p>Grass-Type<br />
                                <span>Heal themselves</span><br />
                                    Opponents Poisoned.</p>
                            </div>
                        </div>
                        <div className="type-info">
                            <div className="frame__img">
                                <img src="./img/frame__img.png" alt="frame__img" />
                                <img src="./img/Energy-2.png" alt="Energy" />
                            </div>
                            <div className="frame__info">   
                                <img src="./img/frame__info.png" alt="frame__info" />                          
                                <p>Fire-type<br />
                                    <span>Big attacks</span><br />
                                    Opponents Burned</p>
                            </div>
                            
                        </div>
                       <div className="type-info">
                            <div className="frame__img">
                                <img src="./img/frame__img.png" alt="frame__img" />
                                <img src="./img/Energy-3.png" alt="Energy" />
                            </div>
                            <div className="frame__info">   
                                <img src="./img/frame__info.png" alt="frame__info" />                          
                                <p>Water-type<br />
                                    <span>Manipulate energy</span><br />
                                    Opponents move around</p>
                            </div>
                       </div>


                       <div className="type-info">
                            <div className="frame__img">
                                <img src="./img/frame__img.png" alt="frame__img" />
                                <img src="./img/Energy-4.png" alt="Energy" />
                            </div>
                            <div className="frame__info">   
                                <img src="./img/frame__info.png" alt="frame__info" />                          
                                <p>Lightning-type<br />
                                    <span>Bring back energy</span><br />
                                    Opponents paralyzed</p>
                            </div>
                        </div>
                        <div className="type-info">
                            <div className="frame__img">
                                <img src="./img/frame__img.png" alt="frame__img" />
                                <img src="./img/Energy-5.png" alt="Energy" />
                            </div>
                            <div className="frame__info">   
                                <img src="./img/frame__info.png" alt="frame__info" />                          
                                <p>Darkness-type<br />
                                    <span>Sneaky attacks</span><br />
                                    Opponents discard</p>
                            </div>
                        </div>
                       <div className="type-info">
                            <div className="frame__img">
                                <img src="./img/frame__img.png" alt="frame__img" />
                                <img src="./img/Energy-6.png" alt="Energy" />
                            </div>
                            <div className="frame__info">   
                                <img src="./img/frame__info.png" alt="frame__info" />                          
                                <p>Psychic-type<br />
                                    <span>Special powers</span><br />
                                    Opponents confused</p>
                            </div>
                       </div>

                       <div className="type-info">
                            <div className="frame__img">
                                <img src="./img/frame__img.png" alt="frame__img" />
                                <img src="./img/Energy-7.png" alt="Energy" />
                            </div>
                            <div className="frame__info">   
                                <img src="./img/frame__info.png" alt="frame__info" />                          
                                <p>Fairy-type<br />
                                    <span>Dragon resist</span><br />
                                    Opponents less effective</p>
                            </div>
                        </div>
                        <div className="type-info">
                            <div className="frame__img">
                                <img src="./img/frame__img.png" alt="frame__img" />
                                <img src="./img/Energy-8.png" alt="Energy" />
                            </div>
                            <div className="frame__info">   
                                <img src="./img/frame__info.png" alt="frame__info" />                          
                                <p>Metal-type<br />
                                    <span>Resist attacks</span><br />
                                    Opponents degree attacks</p>
                            </div>
                            
                        </div>
                       <div className="type-info">
                       <div className="frame__img">
                                <img src="./img/frame__img.png" alt="frame__img" />
                                <img src="./img/Energy-9.png" alt="Energy" />
                            </div>
                            <div className="frame__info">   
                                <img src="./img/frame__info.png" alt="frame__info" />                          
                                <p>Fighting-type<br />
                                    <span>Take bigger risks</span><br />
                                    Opponents extra damage</p>
                            </div>
                            
                       </div>


                        
                    </div>
                </div>




                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 background-2">
                        </div>
                    </div>
                </div>


            </section>

        );
    }
}

export default Cardtype;