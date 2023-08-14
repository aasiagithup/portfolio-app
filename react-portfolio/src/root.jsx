import { useEffect, useState,} from 'react';

import {Link, Outlet, useLocation} from 'react-router-dom';



function Root() {
 
  const [expandNavbar,setExpandNavbar] =useState (false);
   const location =useLocation();

  useEffect(()=> {
    setExpandNavbar(false)
  }, [location]);

  return (<>
  
  

    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      
      
        <a className="navbar-brand" href="#">
        

          Aasia Faheem
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0" />
          
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
             
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/aboutme">Aboutme</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/contact">Contact</Link>
          </li>
                    <li className="nav-item">
            <Link className="nav-link active" to="/projects">Projects</Link>
          </li>



          <ul />

        </div>
      </div>
          </nav>
          <div className="container" />
         <div className="home-content">
  
      <h2> HI, I m Web Developer</h2>
          </div>
    <div>


      <Outlet />
    </div>

  </>);
}
  export default Root;
