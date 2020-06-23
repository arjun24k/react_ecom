import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage/homepage.component';
import ShopPage from './Shop/shop.component';
import Header from './HeaderComponent/headerComponent';
import SignInAndSignUpPage from './Authentication/signInSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import 'firebase/firestore'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          (await userRef).onSnapshot(snapshot => {
            this.setState({
              currentUser: {
                id:snapshot.id,
                ...snapshot.data()
              }
            });
          });

        }
        else
          this.setState({ currentUser: userAuth });
       
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }



  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }


}

export default App;
