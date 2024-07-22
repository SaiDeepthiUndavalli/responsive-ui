// src/Eligibility.js
import React from 'react';
import './Eligibility.css';
const Eligibility = () => {
  return (
    <section className="container mt-4 d-flex flex-row">
     <div className='d-flex flex-row'>
      <div className='shadow card2 d-flex flex-column'>
        <h1 className='level'>Levels</h1>
        <div class='img-sec d-flex flex-row'>
             <img src='https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_book_icon.png' className='img4'/> 
             <p className='img-line'>Three (13 papers)</p>
        </div>
      </div>
      <div className='shadow card2 d-flex flex-column'>
        <h1 className='level'>Exams</h1>
        <div class='img-sec d-flex flex-row'>
          <img src='https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_calendar_icon.png' className='img1'/> 
           <p className='img-line'>Quanterly(Online)</p>
        </div>
      </div>
      <div className='shadow card2 d-flex flex-column'>
        <h1 className='level'>Duration</h1>
        <div class='img-sec d-flex flex-row'>
             <img src='https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_exam_icon.png' className='img2'/>
             <p className='img-line'>6-30 months</p>
        </div>
      </div>
      <div className='shadow card2 d-flex flex-column'>
        <h1 className='level'>Exemptions</h1>
        <div class='img-sec d-flex flex-row'>
            <img src='https://www.indigolearn.com/media/CFAPageImages/CFA_COURSE_FEATURE_1.svg' className='img3'/>
            <p className='img-line'>Upto 9 papers</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Eligibility;
