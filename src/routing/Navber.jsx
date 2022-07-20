import React from 'react'

const Home = () => {
  return (
    <div className=''>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container">
         <a href='#' className="navbar-brand  fs-2">Routing</a>
         <button className="navbar-toggler">
         <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
           <div className="navbar-nav ms-lg-auto fs-5">
             <a href='' className="nav-link active" aria-current="page">Home</a>
             <a href='#' className="nav-link">Features</a>
             <a href='#' className="nav-link">Pricing</a>
             <a href='#'className="nav-link ">Disabled</a>
           </div>
         </div>
       </div>
     </nav>
   </div>
  )
}

export default Home