import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import HomePage from './HomePage/homepage.component';
import ShopPage from './Shop/shop.component';
import Header from './HeaderComponent/headerComponent';
import SignInAndSignUpPage from './Authentication/signInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import 'firebase/firestore'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkout from './Checkout/CheckoutPage/checkout';

class App extends React.Component {
 

  unsubscribeFromAuth = null;

  componentDidMount() {
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
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout}/>
          <Route path='/signin' render={()=>this.props.currentUser?<Redirect to='/'/>:<SignInAndSignUpPage/>}/>
        </Switch>
      </div>
    );
  }


}
const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}

const mapStateToProps = (state) =>{
  return {
    currentUser:selectCurrentUser(state),
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
