import { Link } from 'react-router-dom'
import React from 'react'
import './MainMenu.scss'
import { motion } from 'framer-motion'

export const MainMenu = ({ setDisplayMainMenu }) => {

  const menuItems = [
    {
      to: "/games",
      title: "Games",
      src: "./tempBg.png"
    },
    {
      to: "/generativeArt",
      title: "Generative Art",
      src: "./tempBg.png"
    },
    {
      to: "/algorithms",
      title: "Algorithms",
      src: "./tempBg.png"
    },
    {
      to: "/ai",
      title: "Machine Learning",
      src: "./tempBg.png"
    }
  ];

  return (
    <div className='menu-container'>
      <button className="close"onClick={() => setDisplayMainMenu(false)}></button>
      {menuItems.map((item, index) => (
        <Link key={index} to={item.to}>
          <motion.div className='menu-card'
            initial={{ y: 1080 * (index % 2 == 0 ? -1 : 1) }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ scale: 1.01 }}
          >
            <img src={item.src} alt="your mom xd" />
            <h1>{item.title}</h1>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};
