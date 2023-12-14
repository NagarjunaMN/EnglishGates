import React from 'react'
import { Carousel } from 'react-bootstrap'
import car_image from '../../car_image.jpg'
import whatsapp from '../../whatsapp.png'
import chronometer from '../../chronometer.png'
import video from '../../video.png'
import {NavLink} from 'react-router-dom'


function Home() {
  return (
    <React.Fragment>
      <div className="container-fluid p-0">
            <Carousel>
              <Carousel.Item interval={1500}>
                <img className="d-block w-100" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="Image One"
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
              <img className="d-block w-100" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="Image One"
                />
              </Carousel.Item>
              <Carousel.Item interval={1500}>
              <img className="d-block w-100" src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png" alt="Image One"
                />
              </Carousel.Item>
            </Carousel>
      </div>

      <div className="container my-5">
        <div class="card border-light bg-light">
            <div class="card-header">
                <p class=" display-6">Our English Courses<button className="btn btn-primary float-end mt-3">English Courses</button></p>
            </div>
            <div className="row card-body mt-5">    
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                    <div class="card bg-light text-center">
                        <a href="/basic-level"><img class="card-img-top" src={car_image} alt="Card image cap" /></a>
                        <div class="card-body">
                            <h5 class="card-title">Basic Level</h5>
                         </div>

                    </div>
                </div>
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                    <div class="card bg-light text-center">
                        <a href="/spoken-level"><img class="card-img-top" src={car_image} alt="Card image cap" /></a>
                        <div class="card-body">
                            <h5 class="card-title">Spoken English Level</h5>
                         </div>

                    </div>
                </div>
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                    <div class="card bg-light text-center">
                        <a href="/advance-level"><img class="card-img-top" src={car_image} alt="Card image cap" /></a>
                        <div class="card-body">
                            <h5 class="card-title">Advance Level</h5>
                         </div>

                    </div>
                </div>
            </div>    
        </div>
      </div>
     
      <div className="container my-5">
        <div class="card border-light bg-light">
            <div class="card-header text-center ">
                <h3 class=" display-6">Why Choose English Gate</h3>
            </div>
            <div className="row card-body mt-5">    
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                    <div class="card bg-light">
                      <div className="text-center">
                        <a href="/individualpage"><img class="card-img-top w-25 pt-3" src={whatsapp} alt="Card image cap" /></a>
                      </div>
                        <div class="card-body">
                            <h5 class="card-title text-center py-2">WhatsApp Classes</h5>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>Text & on call training.</span></p>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>Jam session & story telling activities.</span></p>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>Speaking room training.</span></p>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>Multiple assignments.</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                    <div class="card bg-light">
                      <div className="text-center">
                        <a href="/individualpage"><img class="card-img-top w-25 pt-3" src={chronometer} alt="Card image cap" /></a>
                      </div>
                        <div class="card-body">
                            <h5 class="card-title text-center py-2">Flexible Timings</h5>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>24*7 personal trainer's assistance.</span></p>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>Can learn in your free time.</span></p>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>Can learn from anywhere.</span></p>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>New batch every week.</span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                    <div class="card bg-light">
                      <div className="text-center">
                        <a href="/individualpage"><img class="card-img-top w-25 pt-3" src={video} alt="Card image cap" /></a>
                      </div>
                        <div class="card-body">
                            <h5 class="card-title text-center py-2">Flexible Timings</h5>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>Spoken English & Grammar expertise.</span></p>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>Friendly & communicative.</span></p>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>1 on 1 Training.</span></p>
                            <p class="card-text"><i class="bi bi-check-circle text-primary"></i> <span>Motivation & mentorship.</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row card-body mt-5">    
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                    <div class="card bg-light">
                        <div class="card-body">
                            <h5 class="card-title text-center py-2">Basic</h5>
                            <h6 class="card-subtitle mb-2 text-center text-muted">Who is this course for?</h6>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Are you a beginner in learning English?</p>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Do you want to learn basic grammar?</p>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Do you want to start your English communication?</p>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Do you want to improve your reading skills?</p>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Do you want to improve your listening comprehension?</p>
                            <div className="text-center">
                              <NavLink to={'/basic-level'} className="text-center">Click here</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                    <div class="card bg-light">
                        <div class="card-body">
                            <h5 class="card-title text-center py-2">Spoken English</h5>
                            <h6 class="card-subtitle mb-2 text-center text-muted">Who is this course for?</h6>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Do you want to improve your English speaking skills?</p>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Improve your vocabulary in English?</p>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Correct your grammatical mistakes?</p>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Do you want to learn the correct pronunciation?</p>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Do you want to approach your job interview with confidence?</p>
                            <div className="text-center">
                              <NavLink to={'/spoken-level'} className="text-center">Click here</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                    <div class="card bg-light">
                        <div class="card-body">
                            <h5 class="card-title text-center py-2">Advance</h5>
                            <h6 class="card-subtitle mb-2 text-center text-muted">Who is this course for?</h6>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Want to be a fluent speaker in English?</p>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Would you like to speak confidently in public?</p>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Do you need accent training?</p>
                            <p class="card-text"><i class="bi bi-forward-fill text-primary"></i> Would you like to go to your job interview with confidence?</p>
                            <div className="text-center">
                              <NavLink to={'/advance-level'} className="text-center">Click here</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="container my-5">  
        <div class="card">
            <div class="card-header text-center">
                <p class=" display-6">Course Levels & Features</p>
            </div>
            <div className="row card-body mt-5">    
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                  <div class="card border-0 text-center">
                    <div className="card-body border border-secondary  bg-primary mb-2">
                      <h5 class=" text-light card-text">Basic Level Course</h5>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Know to introduce yourself.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Ask and understand questions.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Frame sentence on your own.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Interview tips and tricks.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Translate English well.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <NavLink to={'/basic-level'} class="card-text">Know more</NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                  <div class="card border-0 text-center">
                    <div className="card-body border border-secondary  bg-primary mb-2">
                      <h5 class=" text-light card-text">Spoken English Level Course</h5>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Make error-free sentence.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Thorough with grammar.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Identify Mistakes And Correct them.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Equip your writing skill.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Be a fluent reader of English.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <NavLink to={'/spoken-level'} class="card-text">Know more</NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 col-lg-4 col-sm-12">
                  <div class="card border-0 text-center">
                    <div className="card-body border border-secondary  bg-primary mb-2">
                      <h5 class=" text-light card-text">Advance Level Course</h5>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Correct your accent.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Attain a high level of fluency.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Become a confident public speaker.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Host your business meet at ease.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <p class="card-text">Achieve the LSRW skill.</p>
                    </div>
                    <div class="card-body border border-secondary mb-2">
                      <NavLink to={'/advance-level'} class="card-text">Know more</NavLink>
                    </div>
                  </div>
                </div>
            </div>    
        </div>
      </div>
      
    </React.Fragment>
  )
}

export default Home
