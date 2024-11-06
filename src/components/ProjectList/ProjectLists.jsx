import { useState, useEffect } from "react";
import "./ProjectLists.css";

import LikedFilled from "../../assets/like-filled.svg";
import Like from "../../assets/like.svg";

import { getApiData } from "../../services/apiServices";

function ProjectLists(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await getApiData("projects");
        setProjects(projectsResponse);
      } catch {
        setProjects([]);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>Follow Our Projects</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page looking at its layout points.
        </p>
      </div>
      <div className="projects-grid">
        {
          projects ?
            projects.map((project) => (
              <div key={project.id}>
                <div className="project-card">
                  <div
                    className="thumb tertiary-background"
                    style={{ backgroundImage: `url(${project.thumb})` }}
                  ></div>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                  <img src={LikedFilled} alt="Like icon" />
                </div>
              </div>
            ))
          : null
        }
      </div>
    </div>
  );
}

export default ProjectLists;
