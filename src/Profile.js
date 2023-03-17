import {
  faFacebook,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Profile = () => {
  const contactInfo = [
    { id: 1, type: "email", value: "youremail@example.com" },
    { id: 2, type: "phone", value: "+1234567890" },
    { id: 3, type: "location", value: "Your location" }
  ];

  return (
    <div className="profile">
      <img
        className="profile-image"
        src="https://via.placeholder.com/150"
        alt="Your Name"
      />
      <h1 className="profile-name">Your Name</h1>
      <div className="social-links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="contact-info">
        {contactInfo.map((info) => (
          <span key={info.id}>
            {info.type}: {info.value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Profile;
