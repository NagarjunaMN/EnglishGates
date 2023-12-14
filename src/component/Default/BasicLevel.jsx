import React from 'react'
import { Carousel } from 'react-bootstrap'
import car_image from '../../car_image.jpg'
import {NavLink} from 'react-router-dom'


function BasicLevel() {
  return (
    <div>
      <React.Fragment>
      <div className='container my-3'>
        <div class="row">
            <div class="col-md-12 col-sm-12 ml-0">
                <div className="text-center">
                    <h1 class="display-3">Basic Level Course</h1>
                    <img src={car_image} className='my-3' alt="" />
                    <p>Want to learn English from the scratch? No problem! Join our Basic Spoken English batch to improve English from the beginning.</p>
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
                    <li class="list-group-item">The Basic Spoken English course designed –– after several months of research –– is It’s Possible signature Spoken English program. The program offers a sophisticated, activity-based approach to learning English language where there is less classroom training and more classroom interaction among students.</li>
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">Who is This For?</li>
                    <li class="list-group-item">The Basic Spoken English course is for students with basic English language skills. To be more clear, It’s for students with average reading, writing and comprehension skills and for those who have had a schooling in English medium schools, colleges.</li>
                    <li className="list-group-item">The course allows you to not only understand grammar, but also learn how to use it while speaking. It helps you:
                        <ul>
                            <li>Get rid of your common grammatical mistakes E</li>
                            <li>Enhances your vocabulary</li>
                            <li> Removes stage fear</li>
                            <li>Makes you competent enough to do day-to-day </li>
                            <li>communication with your friends, colleagues in English</li>
                        </ul>
                        So if you are a student, professional and an entrepreneur seeking to learn the basics of Spoken English to meet your career goals, this course is for you.</li>
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">What You Will Learn</li>
                    <li class="list-group-item">TAs part of this course, you would learn the following:</li>
                    <ul>
                        <li>Understanding of Complete Grammar and it’s usage</li>
                        <li>SIMPLE TENSES</li>
                        <li> NOUNS </li>
                        <li> PRONOUNS </li>
                        <li> VERBS &ADVERBS </li>
                        <li> QUESTION WORDS</li>
                        <li> INTRODUCTIONS</li>
                        <li> ADJECTIVES</li>
                        <li> CONTINUOUS TENSES </li>
                        <li> BASIC VOCABULARY</li>
                        <li> PERFECT TENSES</li>
                        <li> ADVANCE VOCABULARY</li>
                        <li> PERFECT TENSES</li>
                        <li> MAKING LONGER SENTENCES</li>
                        <li> SIMPLE CONVERSATIONS</li>
                        <li> WRITING EMAILS</li>
                        <li> PERFECT CONTINUOUS TENSES</li>
                        <li> OFFICE CONVERSATIONS</li>
                        <li> USAGE OF AUXILARY VERBS</li>
                        <li> CREATING STORIES</li>
                        <li> NEGATIONS AND REQUESTS</li>
                    </ul>
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">Requirements</li>
                    <li class="list-group-item">Basic reading and writing skills</li>
                </ul>
                <ul class="list-group my-4">
                    <li class="list-group-item active h4">Related Links</li>
                    <li class="list-group-item"><NavLink to={'/spoken-level'} className="fw-bold btn btn-primary" >Spoken English Level Course</NavLink>r</li>
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

export default BasicLevel
