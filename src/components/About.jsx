import React, { useEffect, useState } from "react";
import "../styles/About.css";
import profileImage from "../assets/Profile2.jpg"; // Corrected image import path

const Profile = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100); // Delay to allow CSS animations to take effect
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <section
      id="profile"
      className={`profile-section ${loaded ? "loaded" : ""}`}
    >
      <div className="profile-container">
        <img
          src={profileImage}
          alt="Profile"
          className={`profile-picture ${loaded ? "animate" : ""}`}
        />
        <div className={`profile-content ${loaded ? "animate" : ""}`}>
          <h1 className={`profile-title ${loaded ? "animate" : ""}`}>
            Designing Success, One{" "}
            <span className="highlight animated-gradient">Solution</span> at a
            Time
          </h1>
          <p className={`profile-text ${loaded ? "animate" : ""}`}>
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
