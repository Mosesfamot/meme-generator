import React from 'react';

export default function Navbar() {
    return (
        <header className="header">
            <img 
                src={require('../images/troll-face.png')} 
                className="header--image"
                alt="header_image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project</h4>
        </header>
    )
}