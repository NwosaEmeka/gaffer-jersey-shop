import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom'
import CartPage from './pages/CartPage';
import ErrorPage from './pages/ErrorPage';
import MainPage from './pages/MainPage';
import Header from './components/Header_component/Header';
import SigninPage from './pages/SigninPage';
import Orders from './pages/Orders';
import Footer from './components/Footer';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import SignupPage from './pages/SignupPage';
import { auth,addUserToFirestore } from './firebase/firebase'
import { useStoreValue } from './contextApi/StateProvider';
import './App.css';



function App() {
  const [_, dispatch] = useStoreValue()
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in
        const userRef = await addUserToFirestore(user)
        userRef.onSnapshot(snapshot => {
          dispatch({
            type: 'SET_USER',
            payload: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
          // console.log(snapshot, snapshot.data())
        })
      }
      else {
        // User is signed out.
        dispatch({
          type: 'SET_USER',
          payload: null
        })
      }
    })
  },[dispatch])
  return (
    <div className="grid__container">
      <header>
        <Header />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={MainPage}/>
          <Route path="/products:id" component={MainPage}/>
          <Route path="/cart" component={CartPage}/>
          <Route path="/signin" component={SigninPage}/>
          <Route path="/signup" component={SignupPage}/>
          <Route path="/forgetpassword" component={ForgetPasswordPage}/>
          <Route path='/orders' component={Orders}/>
          <Route component={ErrorPage}/>
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
      
    </div>
  );
}

export default App;