import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects = [
    {
      id: 1,
      title: "XMutant",
      description:
        "XMutant is an innovative Non-Fungible Token (NFT) marketplace tailored specifically for generative art. It empowers artists by providing a seamless platform to create, showcase, and monetize their unique generative artworks. Through robust tools and features, XMutant aims to foster a vibrant ecosystem for the global generative art community.",
      link: "https://devpost.com/software/xmutant",
    },
    {
      id: 2,
      title: "Token Resurrection",
      description:
        "Token Resurrection addresses the issue of tokens being lost when mistakenly transferred to contract addresses. This solution aims to recover these tokens through a structured process involving verification, attestation, and recovery proposal submission.",
      link: "https://github.com/Token-Resurrection/Token-Resurrection",
    },
    {
      id: 3,
      title: "FanVibe",
      description:
        "FanVibe is a revolutionary platform that bridges the gap between fans and artists in the entertainment industry. It allows fans to easily convert event tickets into unique NFTs, creating a tangible connection between the two communities.",
      link: "https://github.com/jaydip676/fan-engage",
    },
    {
      id: 4,
      title: "VidWeave",
      description:
        "VidWeave is a productivity and video sharing, editing, saving, and deploying platform that allows teams to work and contribute together.",
      link: "https://github.com/bhadresh-lamprostech/Vidweave",
    },
    {
      id: 5,
      title: "TraceCheck",
      description:
        "TraceCheck aims to revolutionize the way educational records and employee background information are managed and verified. The platform acts as a secure and decentralized repository, connecting users, issuing authorities, and companies for background checks.",
      link: "https://github.com/abhirrajput210/Trace_Check",
    },
    {
      id: 6,
      title: "SJewels",
      description:
        "  SJewels is an e-commerce platform for a jewelry store, currently in production. ",
      link: "https://github.com/yourusername/SJewels",
    },
  ];

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="h2">My Projects</h2>
      <div className="projects-container border">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${index >= 3 ? "fade-in" : ""}`}
          >
            <h3>{project.title}</h3>
            <div className="project-description">
              <p>{project.description}</p>
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <i className="fas fa-external-link-alt external-link-icon"></i>
            </a>
          </div>
        ))}
      </div>
      {visibleProjects < projects.length ? (
        <button className="show-more" onClick={showMoreProjects}>
          Show More
        </button>
      ) : (
        <button className="show-less" onClick={showLessProjects}>
          Show Less
        </button>
      )}
    </section>
  );
};

export default Projects;
