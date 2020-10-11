import React from 'react'

function AuthForm(props) {
  return (
    <div className="form__element">
        <input
          type={props.type}
          name ={props.name}
          value={props.value}
          onChange={props.handleInput}
          required
          className="form__input"
        />
        <label
          htmlFor={props.name}
          className={props.value ? 'form__label shrink' : 'form__label'}
        >{props.label}:
        </label>
      </div>
  )
}

export default AuthForm
