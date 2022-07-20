import React from 'react'
import errorImg from '../../img/error.jpg'

const Error = () => {
  return (
    <div >
      <img 
        className='img-fluid w-100'
        style={{height : "90vh"}}
        src={errorImg} 
      />
    </div>
  )
}

export default Error