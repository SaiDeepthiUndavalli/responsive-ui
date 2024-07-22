// src/WhyChooseUs.js
import React from 'react';
import './WhyChooseUs.css';
const WhyChooseUs = () => {
  return (
    <section className="container mt-4">
      <div class="wcu-section pt-5 pb-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="wcu-heading">Why Choose Us?</h1>
                   
                </div>
                <div class="col-12 col-md-4">
                    <div class="wcu-card p-3 mb-3">
                        <img src="https://www.indigolearn.com/media/images/ca_concept.png" class="wcu-card-image" />
                        <h1 class="wcu-card-title mt-3">
                        Expert Faculty
                        </h1>
                        <p class="wcu-card-description">Our qualified Faculty with significant practical experience guide students every step of the way</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="wcu-card p-3 mb-3">
                        <img src="https://www.indigolearn.com/media/images/ca_top_faculties.png" class="wcu-card-image" />
                        <h1 class="wcu-card-title mt-3">
                        Complete Success Package
                        </h1>
                        <p class="wcu-card-description">Leading Exam Prep Destination with Video classes, Live sessions, Doubt resolution Forums, MCQs, Practice tests, Webinars.</p>
                    </div>
                </div>
                <div class="col-12 col-md-4">
                    <div class="wcu-card p-3 mb-3">
                        <img src="https://www.indigolearn.com/media/images/placement.png" class="wcu-card-image" />
                        <h1 class="wcu-card-title mt-3">Placements</h1>
                        <p class="wcu-card-description">
                        Resume building workshops, mock interviews and placement drives will help you impress the top employers and get your Dream Job.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  );
}

export default WhyChooseUs;
