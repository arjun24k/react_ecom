import React,{useState} from 'react'

import './signIn.styles.scss'
import FormInput from '../../formInput/formInput';
import CustomButton from '../../CustomButton/customButton';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({emailSignInStart,googleSignInStart}) =>{
   const [userCredentials,setCredentials] = useState({email: '',password: ''});
   const {email,password} = userCredentials;
    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email,password);
        /* try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email: '', password: '' });
            console.log(auth.currentUser.uid);
        }
        catch(error){
            console.log(error);
        } */
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({...userCredentials,[name]: value})
       // this.setState({ [name]: value });
    }
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <FormInput name="email" type="email" handleChange={(event) => handleChange(event)} label='Email' value={email} required />
                    <FormInput name="password" type="password" value={password} label='Password' handleChange={(event) => handleChange(event)} required />
                    <div className='sign-in-buttons'>
                            <CustomButton type='submit'>Sign In</CustomButton>
                        <div className='google-sign-in'>
                            <CustomButton type='button' onClick={googleSignInStart} >Google Sign In</CustomButton>
                        </div>
                    </div>
                </form>
            </div>
        );
    
}

const mapDispatchToProps = (dispatch) =>{
    return{
        googleSignInStart:()=>dispatch(googleSignInStart()),
        emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
    }
}



export default connect(null,mapDispatchToProps)(SignIn);