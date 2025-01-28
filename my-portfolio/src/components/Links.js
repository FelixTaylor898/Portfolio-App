import React from "react";
import linksData from "../json/linksData.json";

const Links = () => {
  return (
    <div className="links">
      {linksData.map((item, index) => (
        <div className="image-text-link" key={index}>
          <img src={item.icon} alt="icon" className="icon" />
          {item.link ? (
            <a className="link" href={item.link} target="_blank" rel="noopener noreferrer">
              {item.text}
            </a>
          ) : (
            <span className="text">{item.text}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Links;