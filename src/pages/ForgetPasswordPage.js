import React, { useState } from 'react'
import AuthForm from '../components/AuthForm/AuthForm'
import CustomBotton from '../components/AuthForm/CustomBotton'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase/firebase'
import './form.css'

function ForgetPasswordPage() {
  const [myform, setMyform] = useState({ email: "" })
  const history = useHistory()

  const handleInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    // const [name, value] = e.target // using destructing
    setMyform(previousState => ({
      ...previousState, [inputName]: inputValue
    }))
  }
  const ForgetPassword = (e) => {
    e.preventDefault()
    // some logic
    //todo: validate email
    auth.sendPasswordResetEmail(myform.email)
      .then(res => {
        setMyform({email: "" })
        history.push('/signin')
        alert("Password reset link sent")
      })
    .catch(error => alert(error.message))
  }
  return (
    <div className="form__wrapper">
      <h3>Forgot your password?</h3>
      <div className="form__group">
        <p className="para">Please enter the email that you want to reset the password.</p>
        <form >
          <AuthForm
            name="email"
            type="email"
            value={myform.email}
            label="Email"
            handleInput={handleInput}
          />
          <CustomBotton
            onclick={ForgetPassword}
            value="Get Reset Link"
            type="submit"
            classname="btn btn__pry"
          />
        </form>
        <p className="para"><Link to='/signin' className="form__link">Go Back</Link></p>
      </div>
    </div >
  )
}
export default ForgetPasswordPage
