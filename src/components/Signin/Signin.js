import React, {Component} from 'react';
import './Signin.css';
import Menu from '../Menu/Menu';

class Signin extends Component {
    
    handleSignin = () => {
        let username = localStorage.getItem('username');
        let password = localStorage.getItem('password');
        if(this.refs.username.value === username && this.refs.password.value === password) {
            localStorage.setItem("loginStatus", "true");
        }
    }
   
    render() {
        if(localStorage.getItem("loginStatus") === "false" || localStorage.getItem("loginStatus") === null ){
            return(
                <div>
                    <Menu />
                    <div className="logo">
                        <img src="/img/sunmoonlogo.png" alt="" />
                    </div>

                    <div className="gymlogo">
                        <img src="./img/gymlogo.png" alt="" />
                    </div>

                    <div className="alert alert-danger alert-dismissible mx-auto" id="login__alert">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Warning!</strong> Please Login.
                    </div>
                    
                    <form className="form-signin" id="formsignin">
                        <h1>{localStorage.getItem('email')}</h1>
                        <label htmlFor="signin-username" className="signin">Username:</label>
                        <input ref="username" type="text" id="signin-username" className="signin-control" placeholder="Username" required autoFocus />
                        <label htmlFor="signin-password" className="signin">Password:</label>
                        <input ref="password" type="password" id="signin-password" className="signin-control" placeholder="Password" required/><br />
                        <button onClick={this.handleSignin} className="btn btn-success signin__btn">Sign In</button>
                    </form>
                    <iframe title="signinMusic" src="/img/pokemondata.mp3" allow="autoplay" id="audio" style={{display: 'none'}} /> 
                </div>
            );
        } else {
            return(
                <div>
                    <Menu />
                    <div className="logo">
                        <img src="/img/sunmoonlogo.png" alt="" />
                    </div>  

                    <div className="trainers">
                        <img src="./img/trainers.png" alt="" />
                    </div>

                    <div className="annouce" id="welcome">
                    <h2>welcome trainer</h2>
                        <h1>{localStorage.getItem('username')}</h1>
                    </div>
                    <iframe title="signinMusic" src="/img/pokemondata.mp3" allow="autoplay" id="audio" style={{display: 'none'}} />       
                </div>
            );
        }
    }
}

export default Signin;