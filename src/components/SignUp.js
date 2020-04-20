import React, { Component } from 'react';
import Navbar from './Navbar.js';
import FormField from './FormField.js';
import CoolButton from './CoolButton.js';
import './SignUp.css';

class SignUp extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />      
                <FormField label="Password" type="password" placeholder="Password" />  
                <br></br>
                <CoolButton isPrimary>Submit</CoolButton>    
            </div>
        );
    }
}

export default SignUp;