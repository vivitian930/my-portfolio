import React from "react";
// import paint from "../images/paint.png";
// import profile from "../images/profile-img.jpg";

const About = () => {
  const profile = "https://via.placeholder.com/150";
  const paint = "https://via.placeholder.com/150";
  return (
    <div className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="profile-img">
          <img src={profile} alt="profile" />
        </div>
        <div className="profile-details">
          <p>
            Hi there! My name is John and I'm a frontend developer based in San
            Francisco. I love building beautiful and intuitive websites that
            provide great user experiences. My passion for web development
            started when I was a teenager and has only grown stronger with time.
            When I'm not coding, you can usually find me hiking in the mountains
            or painting in my studio.
          </p>
          <img src={paint} alt="paint" className="paint" />
        </div>
      </div>
    </div>
  );
};

export default About;
