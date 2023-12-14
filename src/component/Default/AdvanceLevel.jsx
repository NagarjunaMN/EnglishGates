import React from 'react'
import { Carousel } from 'react-bootstrap'
import car_image from '../../car_image.jpg'
import {NavLink} from 'react-router-dom'


function AdvanceLevel() {
  return (
    <div>
      <React.Fragment>
      <div className='container my-3'>
        <div class="row">
            <div class="col-md-12 col-sm-12 ml-0">
                <div className="text-center">
                    <h1 class="display-3">Advance Level Course</h1>
                    <img src={car_image} className='my-3' alt="" />
                    <p>Advance Spoken English course is for people who good understanding / knowledge of grammar, vocabulary and who speak fairly well.</p>
                </div>
                <div className="container">
                        <div className="">
                                <p className='fw-bold'><i class="bi bi-check-circle-fill text-primary"></i> Lectures : <span>8</span></p>
                                <p className='fw-bold'><i class="bi bi-check-circle-fill text-primary"></i> duration : <span>8 weeks</span></p>
                                <p className='fw-bold'><i class="bi bi-check-circle-fill text-primary"></i> Categories : <span>Spoken English Basic Level</span></p>
                        </div>
                        <div className="text-center ">
                            <h4 className="fw-bold text-primary">We Provide 1 Free demo class </h4>
                            <NavLink to={'/contact'} className="fw-bold btn btn-danger" >Contact us for more details!</NavLink>
                        </div>
                    </div>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">Description</li>
                    <li class="list-group-item">The Advance Spoken English course at It’s Possible is a high powered speaking program where we take the students above and beyond speaking. This is where we strive to make our students professional speakers equipped with knowledge, ideas, and of course –– excellent speaking skills. The course contains a ton of innovative activities, practices that take the students’ communication skills to the next level. Each student gets a ton of time to speak their mind, and get exposure to advance speaking exercises and ultimately become a fabulous speaker. This is where we work on the students’ personality and grooming.</li>
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">Who is This For?</li>
                    <li class="list-group-item">The Advance Spoken English course is for students who have either gone through our Intermediate program or have good communication skills and want to groom them further. If you are a professional or student or even an aspiring corporate professional looking to upgrade their communication skills to grow in their career, the Advance Spoken English course is for you.</li>
                    
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">What You Will Learn</li>
                    <li class="list-group-item">TAs part of this course, you would learn the following:</li>
                    <ul>
                        <li>Presentation Skills</li>
                        <li>Public Speaking</li>
                        <li> Have learnt quite a bit of vocabulary </li>
                        <li> Basic Interview Skills </li>
                        <li> SENTENCES TYPES </li>
                        <li> ENQUIRING CONVERSATIONS</li>
                        <li> SHOULD WOULD COULD</li>
                        <li> WORD PRONUNCIATIONS</li>
                        <li> READING PRACTICES I </li>
                        <li> READING PRACTICES II</li>
                        <li> WRITING PRACTICES</li>
                    </ul>
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">Requirements</li>
                    <li class="list-group-item">Good understanding of grammar</li>
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">Related Links</li>
                    <li class="list-group-item"><NavLink to={'/basic-level'} className="fw-bold btn btn-primary" >Basic Level Course</NavLink>r</li>
                    <li class="list-group-item"><NavLink to={'/spoken-level'} className="fw-bold btn btn-primary" >Spoken English Level Course</NavLink>r</li>
                </ul>
                <div className="text-center ">
                    <NavLink to={'/contact'} className="fw-bold btn btn-danger" >Contact us for Free Demo Class</NavLink>
                </div>
            </div>
        </div>
      </div>
      </React.Fragment>
    </div>
  )
}

export default AdvanceLevel
