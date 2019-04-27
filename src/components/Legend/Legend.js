import React,{Component} from 'react';
import './Legend.css';

class Legend extends Component {
    render() {
        return(
            <div className="container-fluid legend-cards">
                <h1>The Legend Cards</h1>
                <div className="row">
                    <div className="col-md-12 legend">
                        <div className="legend-info">
                            <h3>The Birdramon and Rainbowfire</h3>
                            <h1>HO-OH</h1>
                            <p>Ho-Oh has a mythical power to resurrect the dead. Ho-Oh was the only known Pokémon to learn Sacred Fire. It is said that when it flies its huge wings create bright, colorful rainbows. The rare few who witness Ho-Oh are promised eternal happiness. Ho-Oh used to perch at the top of the Bell Tower until the Brass Tower was destroyed by fire.</p>
                        </div>
                        <img src="./img/LEGEND-1.png" alt="LEGEND" />
                    </div>
                </div>



                <div className="row">
                    <div className="col-md-12 legend2">
                        <div className="legend-info">
                            <h3>The Silverwing and Swirlstorm</h3>
                            <h1>LUGIA</h1>
                            <p>Lugia leads the Legendary birds. When they fight over territory, Lugia is the only Pokémon that can quell their ceaseless fighting, It is said that a light flutter of its wings is capable of causing winds powerful enough to tear down cliffs. If it were to flap its wings, it could hypothetically spawn storms lasting as long as 40 days.</p>
                        </div>
                        <img src="./img/LEGEND-2.png" alt="LEGEND" />
                    </div>
                </div>




                <div className="row">
                    <div className="col-md-12 legend3">
                        <div className="legend-info">
                            <h3>The Volcan and Roarion</h3>
                            <h1>Entei</h1>
                            <p>Volcanoes erupt when it barks. Unable to restrain its extreme power, it races headlong around the land. Entei embodies the passion of magma.This Pokémon is thought to have been born in the eruption of a volcano. It sends up massive bursts of fire that utterly consume all that they touch.</p>
                        </div>
                        <img src="./img/LEGEND-3.png" alt="LEGEND" />
                    </div>
                </div>



                <div className="row">
                    <div className="col-md-12 legend4">
                        <div className="legend-info">
                            <h3>The Aqualight and Poisedon</h3>
                            <h1>Kyogre</h1>
                            <p>Kyogre is said to be a powerful Pokémon, having control over the element of water and rain to have quenched areas of the world plagued with drought and to have expanded the seas. Kyogre is normally calm and peaceful, but if it meets its rival, Groudon, Kyogre will engage in a cataclysmic battle against it. Through Primal Reversion and with nature’s full power, it will take back its true form.</p>
                        </div>
                        <img src="./img/LEGEND-4.png" alt="LEGEND" />
                    </div>
                </div>



                <div className="row">
                    <div className="col-md-12 legend5">
                        <div className="legend-info">
                            <h3>The Galebow and Atmos</h3>
                            <h1>Rayquaza</h1>
                            <p>Inside Rayquaza’s body lies an organ that contains the same power as a Mega Stone. A Devon Corporation scientist named this organ the mikado organ. By consuming meteoroids as it flies through the stratosphere, the mikado organ will be filled with enough energy to enable Rayquaza’s Mega Evolution.</p>
                        </div>
                        <img src="./img/LEGEND-5.png" alt="LEGEND" />
                    </div>
                </div>





            </div>
        );
    }
}

export default Legend;