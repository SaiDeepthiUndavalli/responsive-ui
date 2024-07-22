// src/BecomeACCA.js
import React from 'react';
import './BecomeAcca.css';
const BecomeACCA = () => {
  return (
    <section className="part1 mt-4 col-12">
       
        <div className='d-flex flex-row'>
        <div className='part-2 '>
      <h1 className='heading'>Become ACCA In 18 Months</h1>
      <p className='para'>Join a thriving community of successful students who have transformed <br/> their careers with our expert Guidance & Comprehensive Classes.<br/> Take control of your future!</p>
    
      <div className='container d-flex flex-row'>
      <div className='shadow card d-flex flex-column'>
        <h1 className='count'>3,28,305</h1>
        <p className='line'>Registered Users</p>
      </div>
      <div className='shadow card d-flex flex-column'>
        <h1 className='count'>1,01,029</h1>
        <p className='line'>Courses Enrolled</p>
      </div>
      <div className='shadow card d-flex flex-column'>
        <h1 className='count'>2,59,72,757</h1>
        <p className='line'>Minutes Watched</p>
      </div>
      <div className='shadow card d-flex flex-column'>
        <h1 className='count'>8 Experts</h1>
        <p className='line'>Faculty</p>
        </div>
      </div>
      </div>
      
      <div className='shadow container2 d-flex justify-content-end'>
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

export default BecomeACCA;
