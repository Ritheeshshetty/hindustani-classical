import React from "react";

function About() {
  return (
    <>
      <div className="profile">
        <h1>About US</h1>
        <div className="dev_profile">
          <div className="dev1">
            <div className="profile_pic">
              <img src="./mydp.jpg" alt="" />
              <p>
                Hi Ritheesh here, a passionate developer with a love for coding
                and problem-solving. <br />
                Email: ritheeshshetty77@gmail.com <br />
                Phone No: 70195XX7XX
              </p>
              <div className="social">
                <a href="https://www.linkedin.com/in/ritheesh-shetty-2b8929247/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://github.com/Ritheeshshetty/Ritheeshshetty">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <div className="profile_pic">
              <img src="./anamay.jpg" alt="anamay" />
              <p>
                Hi Anamay here,Interested in culture, languages, history,
                mythology, and obviously music, I feel like Classical and Folk
                Singing brings all of my interests together! Currently learning
                and practicing Hindustani Classical Music and pursuing my
                Master's!
              </p>
              <div className="social">
                <a href="">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
