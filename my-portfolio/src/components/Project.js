import React, { useState } from 'react';

const Project = ({ title, thumbnail, description, skills, links }) => {
const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => {
setIsOpen(prevState => !prevState);
};

return (
<div className="project">
  <div className="project-header">
    <img src={thumbnail} alt={`${title} Thumbnail`} className="project-thumbnail" />
    <h3>{title}</h3>
    <img src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
      alt="Dropdown Icon" className={`dropdown-icon ${isOpen ? 'flipped' : '' }`} // Apply 'flipped' class when open
      onClick={toggleDropdown} />
  </div>
  <div className={`project-details ${isOpen ? 'open' : '' }`}>
    <div className="links">
      {links.map((link, index) => (
      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" style={{ marginRight: '20px' }} // Adds
        space between links>
        {link.name}
      </a>
      ))}

    </div>
    <p><strong>Description:</strong> {description}</p>
    <p><em><strong>Skills:</strong> {skills.join(', ')}</em></p>
  </div>
</div>
);
};

export default Project;