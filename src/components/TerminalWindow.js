import React, { useState } from 'react';
import './TerminalWindow.css'; // Assuming you have a CSS file for styling

const TerminalWindow = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            setOutput([...output, `> ${input}`, `Response for: ${input}`]);
            setInput('');
        }
    };

    return (
        <div className="terminal-window">
            <div className="terminal-output">
                {output.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className="terminal-input-form">
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    className="terminal-input"
                    placeholder="Type your command..."
                />
            </form>
        </div>
    );
};

export default TerminalWindow;