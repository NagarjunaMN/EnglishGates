import React from 'react'
import { Carousel } from 'react-bootstrap'
import car_image from '../../car_image.jpg'

function IndividualPage() {
  return (  
    <React.Fragment>
      <div className='container-fluid my-3'>
        <div class="row">
            <div class="col-md-5 col-sm-12 pl-5">
              <Carousel>
                  <Carousel.Item interval={1500}>
                    <img className="d-block rounded w-100" src={car_image} alt="Image One"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                  <img className="d-block rounded w-100" src={car_image} alt="Image One"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                  <img className="d-block rounded w-100" src={car_image} alt="Image One"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                  <img className="d-block rounded w-100" src={car_image} alt="Image One"
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={1500}>
                  <img className="d-block rounded w-100" src={car_image} alt="Image One"
                    />
                  </Carousel.Item>
              </Carousel>
            </div>
            <div class="col-md-7 col-sm-12 ml-0">
                <h1 class="text-center display-3">London Hills Solid Men's Round Neck T-Shirts</h1>
                <ul class="list-group my-4">
                  <li class="list-group-item active h4">Description :-</li>
                  <li class="list-group-item">The best looking shirt we have for you, it made of the best fabric and the best design , you can checkout the real photo in the photo section.</li>
                  <li class="list-group-item">Fit Type: Regular Fit</li>
                  <li class="list-group-item">Fabric: Cotton</li>
                  <li class="list-group-item">Style: Regular</li>
                  <li class="list-group-item">Pattern: Striped</li>
                </ul>
                <div className="text-center">
                  <div class="btn-group-vertical btn-group btn-group-lg">
                      <h2 class=" d-block">MRP :- 25.00 ₹</h2>
                      <p>Rating : <span className="float-right">No Ratings yet</span></p>
                      <button class="btn btn-primary rounded">Buy From Meesho</button>
                      <button class="btn btn-primary rounded mt-2">Buy From Amazon</button>
                  </div>
                </div>
            </div>
        </div>
      </div>
      </React.Fragment>
  )
}

export default IndividualPage
