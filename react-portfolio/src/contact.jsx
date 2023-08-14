import { Link, Outlet } from "react-router-dom";
const Contact= () => {
    return(<>
    <h1>contact</h1>
    <Link to="/contact/contactform">veiwcontactform</Link>

    <div className="container" />

    


<div className="home-content">

  
  <div class="social media">
    <a href="#"><i className='bx bxl-facebook-square'></i></a>
    <a href="#"><i className='bx bxl-twitter'></i></a>
    <a href="#"><i className='bx bxl-instagram'></i></a>
    <a href="#"><i className='bx bxl-linkedin-square'></i></a>
    
    
  

  </div>
</div>
<div>


        <Outlet />
    </div>
     </>);
}
 export default  Contact;
