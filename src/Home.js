import React, {Component} from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Introduce from './components/Introduce/Introduce';
import Cardtype from './components/Cardtype/Cardtype';
import Legend from './components/Legend/Legend';
import Slider from './components/Slider/Slider';
import Mega from './components/Mega/Mega';
import Backtop from './components/Backtop/Backtop'
import Tagteam from './components/Tagteam/Tagteam';
import Footer from './components/Footer/Footer';

class Home extends Component {
    render() {
        return(
            <div>
                <Header />
                <Backtop />
                <Menu />
                <Introduce />
                <Cardtype />
                <Legend />
                <Slider />
                <Mega />
                <Tagteam />
                <Footer />
            </div>
        );
    }
}

export default Home;