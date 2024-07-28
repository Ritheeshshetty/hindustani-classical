import React from "react";
import { Link } from 'react-router-dom'

function Section() {
  return (
    <>
      <div className="foreground">
        <div className="content">
          Discover the timeless beauty of Hindustani classical music, a sonic
          tapestry woven across centuries in Northern India. Explore the
          captivating melodies of ragas, the thrilling improvisations, and the
          instruments that bring them to life—from the sitar's gentle hum to the
          sarod's deep resonance. Whether you're new to this musical tradition
          or a long-time listener, this website is your guide into the heart and
          soul of Hindustani classical music
          <button className="explore"><Link to="/theory"> Explore</Link></button>
        </div>
        <div className="background">
          {/* <img className="backimg" src="./krishna.jpg" alt="" /> */}
          {/* <img className="foreimg" src="./krishna.jpg" alt="" /> */}
        </div>
      </div>
    </>
  );
}

export default Section;
