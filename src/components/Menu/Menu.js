import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Menu.css'

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loginStatus: localStorage.getItem("loginStatus"),
        }
    }

    handleClick = () => {
            localStorage.setItem("loginStatus","false");
    }
    
    render() {
        return(
            <nav>
                <div className="sidebar">
                
                    <div><Link to={(this.state.loginStatus === null || this.state.loginStatus === "false") ? "/signin" : "#"}><img src={this.state.loginStatus === "true" ? "img/login-2.png" : "img/login-1.png"} alt="login" /></Link></div>
                    <div onClick={this.handleClick}><Link to={(this.state.loginStatus === null || this.state.loginStatus === "false") ? "/signup" : "/signup"}><img src={this.state.loginStatus === "true" ? "img/reg-2.png" : "img/reg-1.png"} alt="register" /></Link></div>
                    <div><a href="https://pkm-cards.firebaseapp.com"><img src="img/collect.png" alt="collect" /></a></div>
                    <div><Link to="/database"><img src="img/search.png" alt="search" /></Link></div>
                </div>
            </nav>
        );
    }
}

export default Menu;
