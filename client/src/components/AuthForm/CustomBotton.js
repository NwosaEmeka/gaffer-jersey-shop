import React from 'react'

function CustomBotton(props) {
  return (
    <>
      <button
        type={props.type}
        onClick={props.onclick}
        className={props.classname}
      >
        {props.value}
      </button>
    </>
  )
}

export default CustomBotton
