import React from 'react'
import {Link} from 'react-router-dom'
import './mainpage.css'

function ErrorPage() {
  return (
    <div className="error__page">
      <h1 className="error__header">404</h1>
      <h2>Oops! page not found.</h2>
      <p>You must have picked the wrong door because I haven't been able to lay my eyes on the page you are searching form</p>
      <Link to= "/" className="btn btn__pry">
      Back to home
      </Link>
    </div>
  )
}

export default ErrorPage
