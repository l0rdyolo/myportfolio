import { Link } from 'react-router-dom'
import React from 'react'
import './MainMenu.scss'

export const MainMenu = ({ setDisplayMainMenu }) => {



  return (
    <div className='menu-container'>
      <button onClick={()=>setDisplayMainMenu(false)}></button>
      <Link to="/games" >
        <div className='menu-card'>
          <img src="./cokzel.png" alt="annen" />
          <h1>Games</h1>
        </div>
      </Link>
      <Link to="/generativeArt" >
         <div className='menu-card'>
          <img src="./cokzel.png" alt="annen" />
          <h1>Generative Art</h1>

        </div>
      </Link>
      <Link to="/algorithms" >
         <div className='menu-card'>
          <img src="./cokzel.png" alt="annen" />
          <h1>Algorithms</h1>
        </div>
      </Link>
      <Link to="/ai" >
         <div className='menu-card'>
          <img src="./cokzel.png" alt="annen" />
          <h1>Machine Learning</h1>
        </div>
      </Link>
    </div>
  )
}
