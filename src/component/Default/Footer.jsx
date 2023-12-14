import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
  <footer className="page-footer d-none d-sm-none d-md-block text-white font-small bg-secondary mt-1 pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
        <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">Quick Links</h5>
                <ul className="list-unstyled">
                    <li><NavLink className="text-decoration-none text-white" to={"/home"}>Home</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" to={"/about"}>About Us</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" to={"/reviews"}>Reviews</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" to={"/contact"}>Contact Us</NavLink></li>
                </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">Courses</h5>
                <ul className="list-unstyled">                                                                    
                    <li><NavLink className="text-decoration-none text-white" to={"basic-level"}>Basic Level</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" to={"spoken-level"}>Spoken English Level</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" to={"advance-level"}>Advance Level</NavLink></li>
                </ul>
            </div>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">Languages</h5>
                <ul className="list-unstyled">
                    <li><NavLink className="text-decoration-none text-white" href="#!">Tamil</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" href="#!">Kannada</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" href="#!">Hindi</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" href="#!">Telugu</NavLink></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 Copyright:
        <a className='text-light' href="https://EnglishGates.com/"> MNT.com</a>
    </div>

</footer>

  )
}

export default Footer
