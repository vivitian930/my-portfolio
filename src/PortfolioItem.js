import React from "react";

const PortfolioItem = ({
  id,
  sectionTitle,
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
            <span>Live demo</span>
          </a>
          <a href={sourceLink} target="_blank" rel="noreferrer">
            <span>Source code</span>
          </a>
        </div>
        <p className="section-title">{sectionTitle}</p>
      </div>
    </div>
  );
};

export default PortfolioItem;
