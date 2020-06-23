import React from 'react'
import SignIn from './signIn/signIn'
import SignUp from './signUp/signUp'
import './signInSignUp.styles.scss'

const SignInAndSignUpPage = () =>{
    return (
        <div className='sign-in-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    );
}

export default SignInAndSignUpPage;