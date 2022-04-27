import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './About.scss';

function About() {
  const abouts = [
    {
      title: 'Front-End Development',
      description: 'I am a good Web Developer',
      imgUrl: images.about01
    },
    {
      title: 'Email Marketing',
      description: 'I am good at Email Marketing',
      imgUrl: images.about02
    },
    {
      title: 'Wordpress Design',
      description: 'I am a good Wordpress Designer',
      imgUrl: images.about03
    },
    {
      title: 'Lead Generation',
      description: 'I am a good Lead Generator',
      imgUrl: images.about04
    }
  ]
  return (
    <><h2 className='head-text'>I know that <span>Good Development</span><br/>Means <span>Good Business</span></h2>
    <div className='app__profiles'>
      {abouts.map((about, index) => (
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: 'tween'}}
        className="app__profile-item"
        key={about.tile+index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default About