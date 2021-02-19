import React from 'react'
import '../styles/login.css'

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="login-container">
                <div id="login-image"></div>
                <div id="form-contain">
                    <div id="login">
                        <h1>Fitness Tracker</h1>
                        <form id="login-form">
                            <input type="text" id="username" name="username" placeholder="Username"></input><br />
                            <input type="password" id="password" name="password" placeholder="Password"></input>
                            {/* <button type="show-pass" id="show-pass">test</button> */}
                            <div id="login-buttons">
                                <button type="login" id="login-btn">Log In</button>
                                <button type="signup">Sign up</button>
                            </div>
                            <a href="#">Forgot password?</a>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login