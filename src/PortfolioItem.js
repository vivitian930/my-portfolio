import React from "react";

const PortfolioItem = ({
  id,
  title,
  description,
  image,
  liveLink,
  sourceLink
}) => {
  return (
    <div className="portfolio-item">
      <a href={liveLink} target="_blank" rel="noreferrer">
        <img src={image} alt={title} />
      </a>
      <div className="item-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="links">
          <a href={liveLink} target="_blank" rel="noreferrer">
            Live demo
          </a>
          <a href={sourceLink} target="_blank" rel="noreferrer">
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
