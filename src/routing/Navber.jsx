import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container">
         <NavLink 
            to="/" 
            className="navbar-brand fs-2">
              Semicolon
         </NavLink>
         
         <button className="navbar-toggler">
           <span className="navbar-toggler-icon">
           </span>
         </button>

         <div className="collapse navbar-collapse">
           <div className="navbar-nav ms-lg-auto fs-5">
             <NavLink 
                to='/' 
                className="nav-link">
                  Home
             </NavLink>

             <NavLink 
                to='/course' 
                className="nav-link">
                  Course 
             </NavLink>

             <NavLink 
                to='/about' 
                className="nav-link">
                  About
             </NavLink>
           </div>
         </div>
       </div>
     </nav>
  )
}

export default Navbar