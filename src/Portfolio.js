import React from "react";
import { portfolioData } from "./portfolioData";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        {portfolioData.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
