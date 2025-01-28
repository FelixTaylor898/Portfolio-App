import React, { useEffect, useState } from 'react';
import Project from './Project';
import projectData from '../json/projects.json'; // Importing JSON data
import '../style/projects.css';

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectData); // Setting data from JSON
  }, []);

  return (
    <div className="projects-list">
      <h1>Portfolio</h1>
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          thumbnail={project.thumbnail}
          description={project.description}
          skills={project.skills}
          links={project.links}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
