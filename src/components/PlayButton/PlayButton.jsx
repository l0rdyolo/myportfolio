import React from 'react'
import "./PlayButton.scss"

export const PlayButton = ({ setDisplayMainMenu }) => {

    const handleClick = function () {
        console.log("open main menu")
        setDisplayMainMenu(true);
    }

    return (
        <div className='pb-container'>
            <button onClick={handleClick}>
                {/* <img src="./cokzel.png" alt="annen" /> */}
            </button>
        </div>




    )
}
