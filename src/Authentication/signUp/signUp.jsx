import React from 'react'

import './signUp.styles.scss'
import FormInput from '../../formInput/formInput';
import CustomButton from '../../CustomButton/customButton';
import { auth,createUserProfileDocument } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;
        if(password !== confirmPassword){
        alert("passwords dont match")
        return;
        }
        this.props.signUpStart({email,password,displayName})
        /* 
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName}) */
               
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const {displayName,email,password,confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={(event) => this.handleSubmit(event)}>
                    <FormInput type='text' name="displayName" handleChange={(event) => this.handleChange(event)} label='Display Name' value={displayName} required />
                    <FormInput type='email' name="email" handleChange={(event) => this.handleChange(event)} label='Email' value={email} required />
                    <FormInput name="password" type="password" value={password} label='Password' handleChange={(event) => this.handleChange(event)} required />
                    <FormInput name="confirmPassword" type="password" value={confirmPassword} label='Confirm Password' handleChange={(event) => this.handleChange(event)} required />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signUpStart:(userDetails)=>dispatch(signUpStart(userDetails))
    }
}

export default connect(null,mapDispatchToProps)(SignUp);