import React from 'react'

import './signIn.styles.scss'
import FormInput from '../../formInput/formInput';
import CustomButton from '../../CustomButton/customButton';
import { signInWithGoogle } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <FormInput name="email" type="email" handleChange={(event) => this.handleChange(event)} label='Email' value={this.state.email} required />
                    <FormInput name="password" type="password" value={this.state.password} label='Password' handleChange={(event) => this.handleChange(event)} required />
                    <div className='sign-in-buttons'>
                            <CustomButton type='submit'>Sign In</CustomButton>
                        <div className='google-sign-in'>
                            <CustomButton onClick={signInWithGoogle} >Google Sign In</CustomButton>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;