import React,{useState} from 'react'
import AuthForm from '../components/AuthForm/AuthForm'
import CustomBotton from '../components/AuthForm/CustomBotton'
import { Link, useHistory } from 'react-router-dom'
import { auth,addUserToFirestore } from '../firebase/firebase'
import './form.css'

function SignupPage() {
  const [myform, setMyform] = useState({ email: "", username: "", password: "" })
  const history = useHistory()

  const handleInput = (e) => {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    // const [name, value] = e.target // using destructing
    setMyform(previousState => ({
      ...previousState, [inputName]: inputValue
    }))
  }
  const signUp = async (e) => {
    e.preventDefault()
    // some logic
    //todo: validate email and password
    const { email, password, username } = myform;
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await addUserToFirestore(user, { displayName: username })
      setMyform({email: "", username: "", password: "" })
      history.push('/')
    } catch (error) {
      alert(error.message)
    }
      
  }
  return (
    <div className="form__wrapper">
      <h3>Forgot your password?</h3>
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
            name="username"
            type="text"
            value={myform.username}
            label="Username"
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
            onclick={signUp}
            value="Sign Up"
            type="submit"
            classname="btn btn__pry"
          />
        </form>
        <p className="para">By clicking "SIGN UP" I agree to <span className="form__link">Privacy Policy</span></p>
      </div>
      <p className="para">Alredy a member? <Link to='/signin' className="form__link">Sign in </Link>Here</p>
    </div>
  )
}

export default SignupPage
