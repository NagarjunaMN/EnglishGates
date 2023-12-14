import React from 'react'
import { Carousel } from 'react-bootstrap'
import car_image from '../../car_image.jpg'
import {NavLink} from 'react-router-dom'


function SpokenLevel() {
  return (
    <div>
      <React.Fragment>
      <div className='container my-3'>
        <div class="row">
            <div class="col-md-12 col-sm-12 ml-0">
                <div className="text-center">
                    <h1 class="display-3">Spoken English Level Course</h1>
                    <img src={car_image} className='my-3' alt="" />
                    <p>Spoken English course offers  extensive speaking opportunities to the students; take your communication skills to the next level now.</p>
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
                    <li class="list-group-item">The Spoken English course at It’s Possible is a program where the real speaking begins. Once the student is equipped with the necessary Grammar knowledge and practiced with day-to-day communication from the basic batch, it is time for hardcore speaking exercises. The Intermediate batch provides a ton of opportunities for the students to speak. In fact –– on an average –– a student at this program speaks for 45 minute to 1 hour in any given class</li>
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">Who is This For?</li>
                    <li class="list-group-item">The Spoken English course is for students with above-basic understanding of grammar, has decent vocabulary, but wants to take it to the next level. In this program, learners –– be it students or professionals –– can expect to become fluent, English speakers, have ideas / knowledge on various current affairs, etc.Whether if you are looking to take your English speaking skills to the next level, the Intermediate batch is for you</li>
                    
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">What You Will Learn</li>
                    <li class="list-group-item">TAs part of this course, you would learn the following:</li>
                    <ul>
                        <li>Speak English really well</li>
                        <li>Get rid of your hesitation completely</li>
                        <li> Have learnt quite a bit of vocabulary </li>
                        <li> CLARIFICATION </li>
                        <li> SHARING OPINIONS </li>
                        <li> DEBATES</li>
                        <li> NEGOTIATIONS</li>
                        <li> UNPREPARED CONVERSATIONS</li>
                        <li> INTERVIEW PREPARATION </li>
                        <li> GROUP DISCUSSION</li>
                    </ul>
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">Requirements</li>
                    <li class="list-group-item">Basic understanding of grammar</li>
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">Related Links</li>
                    <li class="list-group-item"><NavLink to={'/basic-level'} className="fw-bold btn btn-primary" >Basic Level Course</NavLink>r</li>
                    <li class="list-group-item"><NavLink to={'/advance-level'} className="fw-bold btn btn-primary" >Advance Level Course</NavLink>r</li>
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

export default SpokenLevel
