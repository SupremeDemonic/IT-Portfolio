import React from 'react';

const PortfolioItem = ({ title, description, links }) => {
    return (
        <div className="portfolio-item">
            <h2 className="portfolio-title">{title}</h2>
            <p className="portfolio-description">{description}</p>
            <div className="portfolio-links">
                {links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default PortfolioItem;