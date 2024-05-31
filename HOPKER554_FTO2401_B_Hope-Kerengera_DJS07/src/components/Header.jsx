import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <img
                src="./images/basketball-meme.png"
                className="header--image"
                alt="Meme Logo"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project</h4>
        </header>
    )
}