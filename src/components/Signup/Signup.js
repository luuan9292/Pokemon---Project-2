import React, {Component} from 'react'
import './Signup.css';
import Menu from '../Menu/Menu';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: " ",
            username: " ",
            password: " "
        }       
    }

    // Cach 1 su dung destructing
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value //id = value
        })    
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    //Cach 2 thu cong tung cai
    // handleChangeEmail = () => {
    //     this.setState({
    //         email: this.refs.mail.value
    //     });
    // } //Cach 1

    // handleChangeUsername = e => {
    //     this.setState({
    //         username: e.target.value
    //     });
    // } //Cach 2

    // handleChangePassword = e => {
    //     this.setState({
    //         password: e.target.value
    //     });
    // }

    handleSignup = () => {       
        localStorage.setItem('email', this.state.email);
        localStorage.setItem('username', this.state.username);
        localStorage.setItem("password", this.state.password);
    }

    render() {
        return(
            
            <div>
                <Menu />
                <div className="logo">
                    <img src="/img/sunmoonlogo.png" alt="" />
                </div>

                <div className="gymlogo">
                    <img src="./img/gymlogo.png" alt="" />
                </div>


                <div className="modal fade" id="myModal">
                    <div className="modal-dialog">
                    <div className="modal-content">                       
                        <div className="modal-header">
                            <h1 className="modal-title">Success!</h1>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        <div className="modal-body"> Please Choose Log In</div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                    </div>
                </div>
                
                <form onSubmit={this.handleSubmit} className="form-signup">
                    <label htmlFor="signup-email" className="signup">Email:</label>
                    <input onChange={this.handleChange} type="email" id="email" className="signup-control" placeholder="Email address" required autoFocus />
                    <label htmlFor="username" className="signup">Username:</label>
                    <input onChange={this.handleChange} type="text" id="username" className="signup" placeholder="Username" required />
                    <label htmlFor="password" className="signup">Password:</label>
                    <input onChange={this.handleChange} type="password" id="password" className="signup" placeholder="Password" required />
                    <button onClick={this.handleSignup} className="btn btn-primary singup__btn" data-toggle={((this.state.email !== " ") && (this.state.username !== " ") && (this.state.password !== " ")) ? "modal" : " "} data-target={((this.state.email !== " ") && (this.state.username !== " ") && (this.state.password !== " ")) ? "#myModal" : " "}>Sign Up</button>
                </form>
                <iframe title="signupMusic" src="/img/pokemondata.mp3" allow="autoplay" id="audio" style={{display: 'none'}} />
            </div>
        );
    }
}

export default Signup;