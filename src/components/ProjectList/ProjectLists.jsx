import { useContext, useState, useEffect } from "react";
import "./ProjectLists.css";
import { AppContext } from "../../contexts/AppContext";

import LikedFilled from "../../assets/like-filled.svg";
import LikeOutline from "../../assets/like.svg";

import { getApiData } from "../../services/apiServices";

import Button from '../Button/Button';

function ProjectLists(props) {
  const [projects, setProjects] = useState([]);
  const [favProjects, setFavProjects] = useState([]);

  // Função para salvar ou remover projetos favoritos
  const handleSavedProjects = (id) => {
    setFavProjects((prevFavProjects) => {
      if (prevFavProjects.includes(id)) {
        // Remove o projeto dos favoritos
        const filteredArray = prevFavProjects.filter((projectId) => projectId !== id);
        sessionStorage.setItem('favProjects', JSON.stringify(filteredArray));
        return filteredArray;
      } else {
        // Adiciona o projeto aos favoritos
        const updatedArray = [...prevFavProjects, id];
        sessionStorage.setItem('favProjects', JSON.stringify(updatedArray));
        return updatedArray;
      }
    });
  };

  // Fetch de dados dos projetos
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

  // Recupera projetos favoritos do sessionStorage ao carregar
  useEffect(() => {
    const savedProjects = JSON.parse(sessionStorage.getItem('favProjects')) || [];
    if (savedProjects.length > 0) {
      setFavProjects(savedProjects);
    }
  }, []);

  const appContext = useContext(AppContext);

  return (
    <div className="projects-section">
      <div className="projects-hero">
        <h2>{appContext.languages[appContext.language].projects.title}</h2>
        <p>{appContext.languages[appContext.language].projects.subtitle}</p>
      </div>
      <div className="projects-grid">
        {projects.length > 0
          ? projects.map((project) => (
              <div key={project.id}>
                <div className="project-card">
                  <div
                    className="thumb tertiary-background"
                    style={{ backgroundImage: `url(${project.thumb})` }}
                  ></div>
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>

                  <Button
                    buttonStyle="unstyled"
                    onClick={() => handleSavedProjects(project.id)}
                  >
                    <img
                      src={
                        favProjects.includes(project.id) ? LikedFilled : LikeOutline
                      }
                      alt="Like icon"
                    />
                  </Button>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default ProjectLists;
