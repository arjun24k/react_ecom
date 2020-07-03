import React from 'react'

import './signUp.styles.scss'
import FormInput from '../../formInput/formInput';
import CustomButton from '../../CustomButton/customButton';
import { auth,createUserProfileDocument } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import { useState } from 'react';

const SignUp = ({signUpStart}) => {
    const [userCreds,setUserCreds] = useState({
        displayName:'',
            email: '',
            password: '',
            confirmPassword:''
    });

    const {displayName,email,password,confirmPassword} = userCreds;

    const handleSubmit = async event => {
        event.preventDefault();
        if(password !== confirmPassword){
        alert("passwords dont match")
        return;
        }
        signUpStart({email,password,displayName})
        /* 
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName}) */
               
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCreds({...userCreds,[name]:value})
        //this.setState({ [name]: value });
    }
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={(event) => handleSubmit(event)}>
                    <FormInput type='text' name="displayName" handleChange={(event) => handleChange(event)} label='Display Name' value={displayName} required />
                    <FormInput type='email' name="email" handleChange={(event) => handleChange(event)} label='Email' value={email} required />
                    <FormInput name="password" type="password" value={password} label='Password' handleChange={(event) => handleChange(event)} required />
                    <FormInput name="confirmPassword" type="password" value={confirmPassword} label='Confirm Password' handleChange={(event) => handleChange(event)} required />
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        );
    
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signUpStart:(userDetails)=>dispatch(signUpStart(userDetails))
    }
}

export default connect(null,mapDispatchToProps)(SignUp);