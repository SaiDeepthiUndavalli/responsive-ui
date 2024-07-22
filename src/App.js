// src/App.js
import React, { useState } from 'react';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
 import BecomeAcca from './BecomeAcca';
import WhyChooseUs from './WhyChooseUs';
import Eligibility from './Eligibility';
// import LearnInACCA from './LearnInACCA';
import PlacementAssistance from './PlacementAssistance';
import KickOffJourney from './KickOffJourney';
// import Modal from './Modal';
import './App.css'; // Optional: For adding styles

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRequestCallBackClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Header />
      <BecomeAcca />
      <WhyChooseUs />
      <Eligibility />
      <PlacementAssistance />
      <KickOffJourney/> 
      {/* 
      
      
      <LearnInACCA />
      
      <KickOffJourney onRequestCallBackClick={handleRequestCallBackClick} />
      <Modal show={showModal} onClose={handleCloseModal} /> */}
    </div>
  );
}

export default App;
