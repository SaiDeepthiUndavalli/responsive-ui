// src/KickOffJourney.js
import React from 'react';
import './KickOffJourney.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const KickOffJourney = () => {
  return (
    <section className="container mt-4">
      
     <div class="thanking-customers-section pt-5 pb-5 d-flex flex-row">
      <div class="container col-6">
        <div class="row">
          <div class="col-12 col-md-7 d-flex flex-column justify-content-center">
            <h1 class="thanking-customers-section-heading">
            Kick Off Your ACCA Prep Journey with IndigoLearn
            </h1>
            <p class="thanking-customers-section-description">
            Sign-in and get instant access to FREE courses
            </p>
            
            <div>
              <button type="button" class="custom-button" data-toggle="modal" data-target="#exampleModal">
               Request Call Back
              </button>
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog mt-5">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title thanking-customers-section-modal-title" id="exampleModalLabel">
                       Call Requested
                      </h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <p>Success!! We will catch you...</p>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    
    <div className='shadow container2 d-flex justify-content-end col-6'>
        <div className='details-card'>
            <h1 className='card-head'>Aspiring to be an ACCA?</h1>
            <form className='d-flex flex-column'>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Email'/>
                <input type='number' placeholder='Mobile Number'/>
                <button className='button'>SUBMIT</button>
            </form>
        </div>
      </div>
      </div>
      
    </section>
  );
}

export default KickOffJourney;
