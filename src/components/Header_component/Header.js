import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { useStoreValue } from '../../contextApi/StateProvider'
import { auth } from '../../firebase/firebase'
import { itemCount } from '../../contextApi/reducer'
import './header.css'


function Header() {

  const [{ basket, user }] = useStoreValue();
  
  const handleSignOut = () => {
    auth.signOut()
  }
  return (
    <div className="main__header">
        <Link to="/" className="logo link">
        <img src="/logo.png" alt="logo"/>
        </Link>
      <div className="header__option">
        {user ?
          <div>
            <Link to='/' className="Signup__text link" onClick={handleSignOut}> Logout </Link>
            <Link to='/orders' className="Signup__text link" > My orders </Link>
          </div>
      
          :
          <div> 
            <Link to='/signin' className="Signup__text link">Login</Link>
            <Link to='/signup' className="Signup__text link">Register</Link>
          </div>
       }
        
          <div>
            <Link to="/cart" className="basket__wrapper link">
              <FaShoppingCart size={22}/>
            <span className="basket__size">{itemCount(basket)}</span>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Header
