import React, { useEffect, useState } from "react";
import "../styles/About.css";
import profileImage from "../assets/Profile2.jpg";
// Corrected image import path

const Profile = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="profile"
      className={`profile-section ${loaded ? "loaded" : ""}`}
    >
      <div className="profile-container">
        <img src={profileImage} alt="Profile" className="profile-picture" />
        <div className="profile-content">
          <h1 className="profile-title">
            Designing Success, One{" "}
            <span className="highlight animated-gradient">Portfolio</span> at a
            Time
          </h1>
          <p className="profile-text">
            A passionate developer dedicated to creating innovative solutions
            that drive positive change. Welcome to my portfolio! Here you'll
            find my projects, skills, and ways to connect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
