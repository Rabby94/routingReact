import React from 'react'
import errorImg from '../../img/error.jpg'

const Error = () => {
  return (
    <div >
      <img 
        className='img-fluid w-100'
        style={{height : "100vh"}}
        src={errorImg} 
        alt="" 
      />
    </div>
  )
}

export default Error