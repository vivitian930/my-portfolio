import React from "react";
import { portfolioData } from "./portfolioData";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      {portfolioData.map((section) => (
        <div key={section.title}>
          <h2>{section.title}</h2>
          <div className="portfolio-items">
            {section.projects.map((project) => (
              <PortfolioItem
                key={project.id}
                {...project}
                sectionTitle={section.title}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
