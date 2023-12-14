import React, {useContext} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {AuthContext} from '../../Context/AuthContext'
import axios from 'axios'
import {toast} from 'react-toastify'
import logo from '../../logo.png'
import logo3 from '../../logo3.png'
import logo2 from '../../logo2.png'

function Menu(props) {

  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
      <div className="container px-5 ">
        <NavLink to={'/'} className="navbar-brand">
            <h4 className="">English <span className='text-primary'> Gates</span></h4>
            {/* <img src={logo} alt="no image" className='rounded' height={50} srcset="" /> */}
        </NavLink>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" >
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <React.Fragment>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                      <NavLink to={'/home'} className="nav-link active">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <NavLink className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" >Courses</NavLink>
                        <ul className="dropdown-menu">
                          <React.Fragment>
                              <li>
                                  <NavLink to={'/basic-level'} className="dropdown-item" >Basic Level</NavLink>
                              </li>
                              <li>
                                  <NavLink to={'/spoken-level'} className="dropdown-item" >Spoken English Level</NavLink>
                              </li>
                              <li>
                                  <NavLink to={'/advance-level'} className="dropdown-item" >Advance Level</NavLink>
                              </li>

                          </React.Fragment>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <NavLink className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" >About us</NavLink>
                        <ul className="dropdown-menu">
                          <React.Fragment>
                              <li>
                                  <NavLink to={'/products'} className="dropdown-item" >Reviews</NavLink>
                              </li>
                              <li>
                                  <NavLink to={'/shirts'} className="dropdown-item" >Contact Us</NavLink>
                              </li>
                          </React.Fragment>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  
                  <li className="nav-item">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <NavLink className="nav-link active dropdown-toggle" data-bs-toggle="dropdown" >Language</NavLink>
                        <ul className="dropdown-menu">
                          <React.Fragment>
                              <li>
                                  <NavLink to={'/products'} className="dropdown-item" >தமிழ்</NavLink>
                              </li>
                              <li>
                                  <NavLink to={'/shirts'} className="dropdown-item" >ಕನ್ನಡ</NavLink>
                              </li>
                              <li>
                                  <NavLink to={'/shirts'} className="dropdown-item" >हिंदी</NavLink>
                              </li>
                              <li>
                                  <NavLink to={'/shirts'} className="dropdown-item" >తెలుగు</NavLink>
                              </li>
                          </React.Fragment>
                        </ul>
                      </li>
                    </ul>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to={'/contact'} className="nav-link active text-light px-3 btn btn-primary" >Contact Us</NavLink>
                </li>
              </ul>
          </React.Fragment> 
        </div>

      </div>
    </nav>
  )
}

export default Menu
