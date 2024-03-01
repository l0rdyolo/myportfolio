import React from 'react'
import './About.scss';
import { motion } from "framer-motion"

export const About = () => {
  return (
    <div className='about-container'>
      {/* <div className="box"></div> */}
      <motion.div className='box'
        initial = {{opacity: 0 }}
        animate = {{opacity: 1 }}
        transition={{duration:1,delay:0.3}}
        whileHover={{ scale: 1.02 }}
      />
    </div>
  )
}
