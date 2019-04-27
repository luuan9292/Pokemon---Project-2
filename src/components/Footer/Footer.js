import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <footer className="container-fluid">

                <div className="row footer__info">
                    <div className="col-md-12">
                        <ul className="social">
                            <li><a href="https://www.facebook.com/anluu9292" target="blank"><i className="fab fa-facebook-f" /></a></li>
                            <li><a href="https://www.youtube.com/channel/UCeb6YeWePLuUWc2j82ZiMmQ/featured?view_as=subscriber" target="blank"><i className="fab fa-youtube" /></a></li>
                            <li><a href="https://github.com/luuan9292" target="blank"><i className="fab fa-github" /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="footer__game">
                        <img src="./img/footer-frame.png" alt="frame"></img>                
                            <div className="footer__left foot">                          
                                <Link to="/memory" target="blank"><img src="./img/footer-1.png" alt="footer" /></Link> 
                            </div>
                            <div className="footer__right foot">
                                <Link to="/memory2" target="blank"><img src="./img/footer-2.png" alt="footer" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;