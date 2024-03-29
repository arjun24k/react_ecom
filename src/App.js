import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './HomePage/homepage.component';
import ShopPage from './Shop/shop.component';
import Header from './HeaderComponent/headerComponent';
import SignInAndSignUpPage from './Authentication/signInSignUp';
import 'firebase/firestore'
import { connect } from 'react-redux';
import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './Checkout/CheckoutPage/checkout';

const App = ({currentUser,checkUserSession}) => {
 
  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])


  //unsubscribeFromAuth = null;
/* 
  componentDidMount() {
    this.props.checkUserSession()
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          (await userRef).onSnapshot(snapshot => {
         this.props.setCurrentUser({
              currentUser: {
                id:snapshot.id,
                ...snapshot.data()
              }
            });
          });

        }
        else
          this.props.setCurrentUser({ userAuth });
      }
    )
  } */
/* 
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

 */

  
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout}/>
          <Route path='/signin' render={()=>currentUser?<Redirect to='/'/>:<SignInAndSignUpPage/>}/>
        </Switch>
      </div>
    );
  


}
/* const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
} */

const mapStateToProps = (state) =>{
  return {
    currentUser:selectCurrentUser(state),
  };
}

const mapDispatchToProps = dispatch =>{
  return {
    checkUserSession:()=>dispatch(checkUserSession())
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
