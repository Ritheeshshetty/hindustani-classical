import React from "react";

function Media() {
  return (
    <div className="media">
      <h1>Media</h1>
      <div className="video_groups">
        <div className="video1">
          <div className="video_play">
            <video src="./Bilawal.mp4" controls></video>
          </div>
          <div className="video_content">
            Bilawal: <br /> * Origin: Parent raga of many other ragas <br /> *
            Characteristics: Pure (Shuddha) notes, ascending and descending
            scales are the same, evokes a sense of peace and tranquility
          </div>
        </div>
        <div className="video2">
          <div className="video_play">
            <video src="./Bhairav.mp4" controls></video>
          </div>
          <div className="video_content">
            Bhairav: <br /> * Origin: Ancient raga, associated with Lord Shiva <br /> *
            Characteristics: Komal (flat) Re and Dha, descending scale has a
            different pattern, evokes a sense of devotion and spirituality
          </div>
        </div>
        <div className="video3">
          <div className="video_play">
            <video src="./Asavari.mp4" controls></video>
          </div>
          <div className="video_content">
            Asavari: <br /> * Origin: Derived from raga Bhairav <br /> * Characteristics:
            Komal Ga, Dha, and Ni, evokes a sense of melancholy and longing
          </div>
        </div>
        <div className="video4">
          <div className="video_play">
            <video src="./Bhoopali.mp4" controls></video>
          </div>
          <div className="video_content">
            Bhoopali: <br /> * Origin: Evening raga, associated with the monsoon season
           <br /> * Characteristics: Komal Ga and Dha, ascending and descending scales
            are the same, evokes a sense of romance and longing
          </div>
        </div>
        <div className="video5">
          <div className="video_play">
            <video src="./Merukhand.mp4" controls></video>
          </div>
          <div className="video_content">
            Merukhand Alankaar: <br /> * A fundamental vocal exercise in Hindustani
            classical music. <br /> * Based on permutations: taking a small set of
            notes (swaras) and singing them in all possible combinations. <br /> *
            Improves vocal control and flexibility. <br /> * Helps master smooth
            transitions between notes. <br /> * Strengthens understanding of a raga's
            structure and allowed note movements. Example: If your notes are Sa
            Re Ga (C D E), some Merukhand patterns would be: <br /> * Sa Re Ga, Sa Ga
            Re, Re Sa Ga, Re Ga Sa, Ga Re Sa, Ga Sa Re Merukhand is usually
            taught systematically, starting with simple 3-note combinations and
            progressing to more complex patterns.
          </div>
        </div>
        <div className="video6">
          <div className="video_play">
            <video src="./Dhan Dhan Moorat Krishna Murari.mp4" controls></video>
          </div>
          <div className="video_content">
            A sombre and serious bandish(composition) based on Raag Bhairav
          </div>
        </div>
      </div>
    </div>
  );
}

export default Media;
