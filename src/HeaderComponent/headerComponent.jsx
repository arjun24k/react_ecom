import React from 'react'
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../assets/crown.svg';
import './headerComponent.styles.scss'
import {auth} from '../firebase/firebase.util'
import { connect } from "react-redux";
import CartIcon from '../CartIcon/cartIcon';
import CartDropdown from '../CartDropdown/cartDropdown';

const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {
                    currentUser
                    ?<div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :<Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon/>
                {
                    hidden
                    ?<CartDropdown/>
                    :null
                }                
        </div>
    </div>
);
const mapStateToProps = state => {
    return {
        currentUser:state.user.currentUser,
        hidden:state.cart.hidden
    };
}


export default connect(mapStateToProps)(Header);