import React, {Component} from 'react';
import './Introduce.css';

class Introduce extends Component {
    render() {
        return(
            <section className="container-fluid" id="introduce">
                <div className="row introduce-info">
                    <div className="col-md-6 introduce-text">
                        <img src="img/tcg-card-dex.png" alt="TCG card logo" />
                        <p>In this card game, two players act as Pokemon trainers, using the creatures in their deck to battle one another. Each player has their own deck, each deck should have 60 cards, and there should be three different kinds of cards in your deck: Pokemon, Energy, and Trainers. Energy powers attacks, trainers turn the tables, and Pokémon do battle.Each type of card is described in more detail below.</p>
                    </div>
                    <div className="col-md-6 trailer">
                        <iframe title="trailerFrame" width={850} height={480} src="https://www.youtube.com/embed/videoseries?list=PLXng7mwBG9WLL_CjpLQyGZFvn6Iowbgwt&index=0&mute=1&autoplay=1&?rel=0&controls=0&loop=1" frameBorder={0}/>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 background-1">
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Introduce;