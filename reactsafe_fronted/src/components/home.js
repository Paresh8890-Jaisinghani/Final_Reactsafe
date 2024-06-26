import React from 'react';
import sample from './images/video.mp4'
import { Link } from 'react-router-dom';

import './stylesheet/home.css';

const Home = () => {
  return (
    <div className="home">
      <video className="background-video" autoPlay loop muted>
        <source src={sample} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="content">
                    <h1>ReactSafe</h1>
                   
                    <Link  to="/about" class="btn">Get Started</Link >
                </div>
    </div>
  );
};

export default Home;
