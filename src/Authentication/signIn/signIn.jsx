import React from 'react'

import './signIn.styles.scss'
import FormInput from '../../formInput/formInput';
import CustomButton from '../../CustomButton/customButton';
import { auth,signInWithGoogle } from '../../firebase/firebase.util';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email,password} = this.state;
        this.props.emailSignInStart(email,password);
        /* try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email: '', password: '' });
            console.log(auth.currentUser.uid);
        }
        catch(error){
            console.log(error);
        } */
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
                            <CustomButton type='button' onClick={this.props.googleSignInStart} >Google Sign In</CustomButton>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        googleSignInStart:()=>dispatch(googleSignInStart()),
        emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
    }
}



export default connect(null,mapDispatchToProps)(SignIn);