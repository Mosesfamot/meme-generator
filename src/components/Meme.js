import React from "react";
import memesData from './memesData.js';

export default function Meme() {
    function getMemeImage() {
        console.log("Clicked")
    }

    return (
        <section className="form-section">
            <div className="form-fields">
                {/* <label htmlFor="top-text">Top Text</label> */}
                <input id="top-text" type="text" placeholder="Shut up" required></input>
                {/* <label htmlFor="bottom-text">Bottom Text</label> */}
                <input id="bottom-text" type="text" placeholder="and take my money" required></input>
                <button onClick={getMemeImage} className="form-button">Get a new meme image 🖼</button>
            </div>
        </section>
    )
}