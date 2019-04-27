import React, {Component} from 'react';
import './Database.css';
import Menu from '../Menu/Menu';

class Database extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }

    renderCards = (card, index) => {

        if(card.name.toLowerCase().indexOf(this.state.search.toLowerCase()) === 0) {
            return <div key={index} className="col-md-3">
            <div className="data__cards">
                <div className="data__card">
                    <img src="img/data-frame1.png" alt="data-frame1" />
                    <img src= {card.img} alt="card" />
                </div>
                <div className="data__info">
                    <img src="img/data-frame2.png" alt="data-frame2" />
                <div className="info__card">
                    <h1>{card.name}</h1>
                    <h1>{card.type}</h1>
                    <h1>{card.hp}</h1>
                </div>
                </div>
            </div>
        </div>
        } else if (this.state.search.toLowerCase() === ""){
            return <div key={index} className="col-md-3">
            <div className="data__cards">
                <div className="data__card">
                    <img src="img/data-frame1.png" alt="data-frame1" />
                    <img src= {card.img} alt="card" />
                </div>
                <div className="data__info">
                    <img src="img/data-frame2.png" alt="data-frame2" />
                <div className="info__card">
                    <h1>{card.name}</h1>
                    <h1>{card.type}</h1>
                    <h1>{card.hp}</h1>
                </div>
                </div>
            </div>
        </div>
        }

    }

    handleSearch = e => {
        this.setState({
            search: e.target.value
        });
    }
   

    render() {   
        return(
            <div>
                <Menu />
                <img src="img/database-logo.png" className="database__logo" alt="database-logo" />

                <div className="search__card">
                    <label htmlFor="search"></label>
                    <input onChange={this.handleSearch} type="text" id="search" placeholder="Search By Name" autoFocus />
                </div>

                <div className="container-fluid">
                    <div className="row">
                        {listDatabase.map((card, index) => {
                            return  this.renderCards(card, index); 
                        })}            
                    </div>
                    <iframe title="datacardMusic" src="/img/pokemondatabase.mp3" allow="autoplay" id="audio" style={{display: 'none'}} />
                </div> 
            </div>

        );
    }
}

let listDatabase = [
    {
        name: 'Snorlax',
        type: 'Normal',
        hp: '190HP',
        img: "cards/card-1.png"
    },
    {
        name: 'Decidueye',
        type: 'Grass',
        hp: '240HP',
        img: "cards/card-2.png"
    },
    {
        name: 'Lurantis',
        type: 'Grass',
        hp: '210HP',
        img: "cards/card-3.png"
    },
    {
        name: 'Incineroar',
        type: 'Fire',
        hp: '250HP',
        img: "cards/card-4.png"
    },
    {
        name: 'Lapras',
        type: 'Water',
        hp: '190HP',
        img: "cards/card-5.png"
    },
    {
        name: 'Primarina',
        type: 'Water',
        hp: '250HP',
        img: "cards/card-6.png"
    },
    {
        name: 'Espeon',
        type: 'Psychic',
        hp: '200HP',
        img: "cards/card-7.png"
    },
    {
        name: 'Lunala',
        type: 'Psychic',
        hp: '250HP',
        img: "cards/card-8.png"
    },
    {
        name: 'Umbreon',
        type: 'Dark',
        hp: '200HP',
        img: "cards/card-9.png"
    },
    {
        name: 'Solgaleo',
        type: 'Steel',
        hp: '250HP',
        img: "cards/card-10.png"
    },
    {
        name: 'Tauros',
        type: 'Normal',
        hp: '180HP',
        img: "cards/card-11.png"
    },
    {
        name: 'Gumshoos',
        type: 'Normal',
        hp: '210HP',
        img: "cards/card-12.png"
    },
    {
        name: 'Lycanroc',
        type: 'Fighting',
        hp: '200HP',
        img: "cards/card-13.png"
    },
    {
        name: 'Turtonator',
        type: 'Fire',
        hp: '190HP',
        img: "cards/card-14.png"
    },
    {
        name: 'Ninetales',
        type: 'Water',
        hp: '210HP',
        img: "cards/card-15.png"
    },
    {
        name: 'Wishiwashi',
        type: 'Water',
        hp: '210HP',
        img: "cards/card-17.png"
    },
    {
        name: 'Vikavolt',
        type: 'Electric',
        hp: '240HP',
        img: "cards/card-18.png"
    },
    {
        name: 'Tapu koko',
        type: 'Electric',
        hp: '170HP',
        img: "cards/card-19.png"
    },
    {
        name: 'Toxapex',
        type: 'Psychic',
        hp: '210HP',
        img: "cards/card-20.png"
    },
    {
        name: 'Tapu lele',
        type: 'Psychic',
        hp: '170HP',
        img: "cards/card-21.png"
    },
    {
        name: 'Metagross',
        type: 'Steel',
        hp: '250HP',
        img: "cards/card-22.png"
    },
    {
        name: 'Sylveon',
        type: 'Fairy',
        hp: '200HP',
        img: "cards/card-23.png"
    },
    {
        name: 'Kommo',
        type: 'Dragon',
        hp: '240HP',
        img: "cards/card-24.png"
    },
    {
        name: 'Drampa',
        type: 'Normal',
        hp: '180HP',
        img: "cards/card-25.png"
    },
    {
        name: 'Bewear',
        type: 'Normal',
        hp: '210HP',
        img: "cards/card-26.png"
    },
    {
        name: 'Tapu Bulu',
        type: 'Grass',
        hp: '180HP',
        img: "cards/card-27.png"
    },
    {
        name: 'Golisopod',
        type: 'Grass',
        hp: '210HP',
        img: "cards/card-28.png"
    },
    {
        name: 'Charizard',
        type: 'Fire',
        hp: '250HP',
        img: "cards/card-29.png"
    },
    {
        name: 'Ho-Oh',
        type: 'Fire',
        hp: '190HP',
        img: "cards/card-30.png"
    },
    {
        name: 'Salazzle',
        type: 'Fire',
        hp: '200HP',
        img: "cards/card-31.png"
    },
    {
        name: 'Tapu Fini',
        type: 'Water',
        hp: '170HP',
        img: "cards/card-32.png"
    },
    {
        name: 'Necrozma',
        type: 'Psychic',
        hp: '180HP',
        img: "cards/card-33.png"
    },
    {
        name: 'Machamp',
        type: 'Fighting',
        hp: '250HP',
        img: "cards/card-34.png"
    },
    {
        name: 'Marshadow',
        type: 'Fighting',
        hp: '150HP',
        img: "cards/card-35.png"
    },
    {
        name: 'Muk',
        type: 'Dark',
        hp: '200HP',
        img: "cards/card-36.png"
    },
    {
        name: 'Darkrai',
        type: 'Dark',
        hp: '180HP',
        img: "cards/card-37.png"
    },
    {
        name: 'Gardevoir',
        type: 'Fairy',
        hp: '230HP',
        img: "cards/card-38.png"
    },
    {
        name: 'Noivern',
        type: 'Dragon',
        hp: '200HP',
        img: "cards/card-39.png"
    },
    {
        name: 'Tsareena',
        type: 'Grass',
        hp: '230HP',
        img: "cards/card-40.png"
    },
    {
        name: 'Entei',
        type: 'Fire',
        hp: '180HP',
        img: "cards/card-41.png"
    },
    {
        name: 'Raichu',
        type: 'Electric',
        hp: '210HP',
        img: "cards/card-42.png"
    },
    {
        name: 'Mewtwo',
        type: 'Psychic',
        hp: '190HP',
        img: "cards/card-43.png"
    },
    {
        name: 'Zoroark',
        type: 'Dark',
        hp: '210HP',
        img: "cards/card-44.png"
    },
    {
        name: 'Gyarados',
        type: 'Water',
        hp: '240HP',
        img: "cards/card-45.png"
    },
    {
        name: 'Golem',
        type: 'Electric',
        hp: '250HP',
        img: "cards/card-46.png"
    },
    {
        name: 'Nihilego',
        type: 'Psychic',
        hp: '180HP',
        img: "cards/card-47.png"
    },
    {
        name: 'Buzzwole',
        type: 'Fighting',
        hp: '190HP',
        img: "cards/card-48.png"
    },
    {
        name: 'Guzzlord',
        type: 'Dark',
        hp: '210HP',
        img: "cards/card-49.png"
    },
    {
        name: 'Kartana',
        type: 'Steel',
        hp: '170HP',
        img: "cards/card-50.png"
    },
    {
        name: 'Exeggutor',
        type: 'Dragon',
        hp: '220HP',
        img: "cards/card-51.png"
    },
    {
        name: 'Silvally',
        type: 'Normal',
        hp: '210HP',
        img: "cards/card-52.png"
    },
    {
        name: 'Pheromosa',
        type: 'Grass',
        hp: '170HP',
        img: "cards/card-53.png"
    },
    {
        name: 'Xurkitree',
        type: 'Electric',
        hp: '180HP',
        img: "cards/card-54.png"
    },
    {
        name: 'Celesteela',
        type: 'Steel',
        hp: '200HP',
        img: "cards/card-55.png"
    },
    {
        name: 'Leafeon',
        type: 'Grass',
        hp: '200HP',
        img: "cards/card-56.png"
    },
    {
        name: 'Glaceon',
        type: 'Water',
        hp: '200HP',
        img: "cards/card-57.png"
    },
    {
        name: 'Dialga',
        type: 'Dragon',
        hp: '180HP',
        img: "cards/card-58.png"
    },
    {
        name: 'Palkia',
        type: 'Dragon',
        hp: '180HP',
        img: "cards/card-59.png"
    },
    {
        name: 'Lucario',
        type: 'Fighting',
        hp: '210HP',
        img: "cards/card-60.png"
    },
    {
        name: 'Greninja',
        type: 'Water',
        hp: '230HP',
        img: "cards/card-61.png"
    },
    {
        name: 'Naganadel',
        type: 'Psychic',
        hp: '210HP',
        img: "cards/card-62.png"
    },
    {
        name: 'Zygarde',
        type: 'Fighting',
        hp: '190HP',
        img: "cards/card-63.png"
    },
    {
        name: 'Yveltal',
        type: 'Dark',
        hp: '180HP',
        img: "cards/card-64.png"
    },
    {
        name: 'Xerneas',
        type: 'Fairy',
        hp: '180HP',
        img: "cards/card-65.png"
    },
    {
        name: 'Rakou',
        type: 'Electric',
        hp: '170HP',
        img: "cards/card-66.png"
    },
    {
        name: 'Shiftry',
        type: 'Grass',
        hp: '240HP',
        img: "cards/card-68.png"
    },
    {
        name: 'Blaziken',
        type: 'Fire',
        hp: '240HP',
        img: "cards/card-69.png"
    },
    {
        name: 'Articuno',
        type: 'Water',
        hp: '170HP',
        img: "cards/card-70.png"
    },
    {
        name: 'Electrode',
        type: 'Electric',
        hp: '190HP',
        img: "cards/card-71.png"
    },
    {
        name: 'Mr.Mime',
        type: 'Psychic',
        hp: '150HP',
        img: "cards/card-72.png"
    },
    {
        name: 'Banette',
        type: 'Psychic',
        hp: '190HP',
        img: "cards/card-73.png"
    },
    {
        name: 'Palossand',
        type: 'Fighting',
        hp: '210',
        img: "cards/card-74.png"
    },
    {
        name: 'Raticate',
        type: 'Dark',
        hp: '200HP',
        img: "cards/card-75.png"
    },
    {
        name: 'Scizor',
        type: 'Steel',
        hp: '210HP',
        img: "cards/card-76.png"
    },
    {
        name: 'Stakatana',
        type: 'Steel',
        hp: '180HP',
        img: "cards/card-77.png"
    },
    {
        name: 'Rayquaza',
        type: 'Dragon',
        hp: '180HP',
        img: "cards/card-78.png"
    },
    {
        name: 'Thundurus',
        type: 'Electric',
        hp: '170HP',
        img: "cards/card-79.png"
    },
    {
        name: 'Tornadus',
        type: 'Normal',
        hp: '180HP',
        img: "cards/card-80.png"
    },
    {
        name: 'Rishiram',
        type: 'Fire',
        hp: '180HP',
        img: "cards/card-81.png"
    },
    {
        name: 'Kingdra',
        type: 'Water',
        hp: '230HP',
        img: "cards/card-82.png"
    },
    {
        name: 'Dragonite',
        type: 'Dragon',
        hp: '250HP',
        img: "cards/card-83.png"
    },
    {
        name: 'Altaria',
        type: 'Dragon',
        hp: '200HP',
        img: "cards/card-84.png"
    },
    {
        name: 'Salamence',
        type: 'Dragon',
        hp: '250HP',
        img: "cards/card-85.png"
    },
    {
        name: 'Kyurem',
        type: 'Dragon',
        hp: '190HP',
        img: "cards/card-86.png"
    },
    {
        name: 'Zekrom',
        type: 'Electric',
        hp: '180HP',
        img: "cards/card-87.png"
    },
    {
        name: 'Shuckle',
        type: 'Grass',
        hp: '170HP',
        img: "cards/card-88.png"
    },
    {
        name: 'Sceptile',
        type: 'Grass',
        hp: '230HP',
        img: "cards/card-89.png"
    },
    {
        name: 'Virizion',
        type: 'Grass',
        hp: '170HP',
        img: "cards/card-90.png"
    },
    {
        name: 'Magcargo',
        type: 'Fire',
        hp: '210HP',
        img: "cards/card-91.png"
    },
    {
        name: 'Blacephalon',
        type: 'Fire',
        hp: '180HP',
        img: "cards/card-92.png"
    },
    {
        name: 'Suicune',
        type: 'Water',
        hp: '180HP',
        img: "cards/card-93.png"
    },
    {
        name: 'Zeraora',
        type: 'Electric',
        hp: '190HP',
        img: "cards/card-94.png"
    },
    {
        name: 'Sigilyph',
        type: 'Psychic',
        hp: '170HP',
        img: "cards/card-95.png"
    },
    {
        name: 'Tyranitar',
        type: 'Dark',
        hp: '250HP',
        img: "cards/card-96.png"
    },
    {
        name: 'Genesect',
        type: 'Steel',
        hp: '180HP',
        img: "cards/card-97.png"
    },
    {
        name: 'Mimikyu',
        type: 'Fairy',
        hp: '180HP',
        img: "cards/card-98.png"
    },
    {
        name: 'Lugia',
        type: 'Normal',
        hp: '190HP',
        img: "cards/card-99.png"
    },
    {
        name: 'Ampharos',
        type: 'Electric',
        hp: '240HP',
        img: "cards/card-100.png"
    },
    {
        name: 'Hoopa',
        type: 'Dark',
        hp: '190HP',
        img: "cards/card-101.png"
    },
    {
        name: 'Cabalion',
        type: 'Steel',
        hp: '170HP',
        img: "cards/card-102.png"
    },
    {
        name: 'Flareon',
        type: 'Fire',
        hp: '210HP',
        img: "cards/card-103.png"
    },
    {
        name: 'Vaporeon',
        type: 'Water',
        hp: '210HP',
        img: "cards/card-104.png"
    },
    {
        name: 'Jolteon',
        type: 'Electric',
        hp: '200HP',
        img: "cards/card-105.png"
    },
    {
        name: 'Eevee',
        type: 'Normal',
        hp: '160HP',
        img: "cards/card-106.png"
    },
    {
        name: 'Melmetal',
        type: 'Steel',
        hp: '220HP',
        img: "cards/card-107.png"
    }
];

export default Database;