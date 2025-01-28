import React from "react";
import Links from "./Links";
import '../style/resumeheader.css';

const ResumeHeader = () => {
  return (
    <header className="resume-header">
      <div className="header-left">
        <h1 className="name">Felix Taylor</h1>
        <p className="location">Moseley, VA</p>
      </div>
      <div className="header-right">
        <Links />
      </div>
    </header>
  );
};

export default ResumeHeader;
