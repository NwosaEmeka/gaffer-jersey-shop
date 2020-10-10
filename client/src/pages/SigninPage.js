import React, {useState} from 'react'
import AuthForm from '../components/AuthForm/AuthForm'
import CustomBotton from '../components/AuthForm/CustomBotton'
import { Link, useHistory } from 'react-router-dom'
import {auth,provider} from '../firebase/firebase'
import './form.css'

function SigninPage() {
  const [myform, setMyform] = useState({ email: "", password: "" })
  const history = useHistory()

  const handleInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    // const [name, value] = e.target // using destructing
    setMyform(previousState => ({
      ...previousState, [inputName]: inputValue
    }))
  }

  const signIn = (e) => {
    e.preventDefault()
    // some logic 
    // todo: validate email and password
    auth.signInWithEmailAndPassword(myform.email, myform.password)
      .then(res => {
        if (res) {
        setMyform({email: "", password: "" })
        history.push('/') //redirect to the homepage
      }
      })
    .catch(error => alert(error.message))
  }

  const googleSignin = () => {
  auth.signInWithPopup(provider)
    .then(res => {
      if (res) {
      history.push('/')
    }
    })
  .catch(error => alert(error.message))
}
  return (
    <div className="form__wrapper">
      <h3>Welcome, Please sign in</h3>
      <div className="form__group">
        <form>
          <AuthForm
            name="email"
            type="email"
            value={myform.email}
            label="Email"
            handleInput={handleInput}
          />
          <AuthForm
            name="password"
            type="password"
            value={myform.password}
            label="Password"
            handleInput={handleInput}
          />
          
          <CustomBotton
            onclick={signIn}
            value="Sign In"
            type="submit"
            classname="btn btn__pry"
          />
          <p className="alternate_siginin">Or</p>
          <CustomBotton
            onclick={googleSignin}
            value="Sign in with Google"
            classname="btn btn__google"
            />
        </form>
        <p className="forgot para"><Link to='/forgetpassword' className="form__link">Forgot Password?</Link></p>
      </div>
      <p className="para">New Member? <Link to='/signup' className="form__link">Register </Link>Here</p>
    </div>
  )
}

export default SigninPage
