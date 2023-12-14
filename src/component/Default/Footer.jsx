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
                    <li><NavLink className="text-decoration-none text-white" href="#!">Home</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" href="#!">Courses</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" href="#!">About Us</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" href="#!">Reviews</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" href="#!">Contact Us</NavLink></li>
                </ul>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-4 mb-md-0 mb-3">
                <h5 className="text-uppercase">Courses</h5>
                <ul className="list-unstyled">                                                                    
                    <li><NavLink className="text-decoration-none text-white" href="#!">Basic Level</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" href="#!">Spoken English Level</NavLink></li>
                    <li><NavLink className="text-decoration-none text-white" href="#!">Advance Level</NavLink></li>
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
