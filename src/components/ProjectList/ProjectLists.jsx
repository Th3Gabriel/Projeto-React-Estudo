import {useContext, useState, useEffect } from "react";
import "./ProjectLists.css";
import { AppContext } from "../../contexts/AppContext";

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

  const appContext = useContext(AppContext);

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>
          {appContext.languages[appContext.language].projects.subtitle}
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
