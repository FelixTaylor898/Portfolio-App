import React from "react";
import resumeData from "../json/resumeData.json";

const ResumeSection = () => {
  return (
    <div className="resume-section">
      {resumeData.sections.map((section, sectionIndex) => (
        <div className="resume-category" key={sectionIndex}>
          <h2 className="category-title">{section.category}</h2>
          {section.roles.map((role, roleIndex) => (
            <div className="resume-item" key={roleIndex}>
              <h3 className="role-title">{role.roleTitle}</h3>
              <h4 className="company-school">{role.companySchool}</h4>
              <p className="location">
                <strong>Location:</strong> {role.location}
              </p>
              <p className="dates">
                <strong>Dates:</strong> {role.dateStarted} - {role.dateEnded}
              </p>
              <p className="description">{role.description}</p>
              <p className="skills">
                <strong>Skills:</strong> {role.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ResumeSection;