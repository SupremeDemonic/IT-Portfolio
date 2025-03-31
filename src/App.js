import React from 'react';
import TerminalWindow from './components/TerminalWindow';
import PortfolioItem from './components/PortfolioItem';
import './assets/css/styles.css';

function App() {
    return (
        <div className="app">
            <TerminalWindow />
            <div className="portfolio">
                <PortfolioItem title="Project 1" description="Description of project 1" />
                <PortfolioItem title="Project 2" description="Description of project 2" />
                <PortfolioItem title="Project 3" description="Description of project 3" />
            </div>
        </div>
    );
}

export default App;