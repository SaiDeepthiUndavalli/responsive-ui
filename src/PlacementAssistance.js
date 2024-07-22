// src/PlacementAssistance.js
import React from 'react';
import './PlacementAssistance.css';
const PlacementAssistance = () => {
  return (
    <section className="con mt-4">
      <h2 className='place-head'>100% Placement Assistance</h2>
      <div className='cont d-flex flex-column justify-content-left'>
        <h1 className='cont-head'>Resume Building</h1>
        <p className='cont-para'>1FIN provides professional guidance to help you create an effective resume to help you create a lasting impression.</p>
      </div>
      <div className='cont d-flex flex-column justify-content-left'>
        <h1 className='cont-head'>Career Counselling</h1>
        <p className='cont-para'>We provide career counselling to conducting mock interviews and aptitude tests – we will assist you at every step, all the way, we make you job ready</p>
      </div>
      <div className='cont d-flex flex-column justify-content-left'>
        <h1 className='cont-head'>Jobs</h1>
        <p className='cont-para'>We will give you an edge over others with our direct corporate affiliations which will ensure that you are placed right.</p>
      </div>
    </section>
  );
}

export default PlacementAssistance;
