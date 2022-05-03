import React, { useState, useEffect} from 'react';
import { urlFor, client } from "../../../src/client";
import { motion } from 'framer-motion';
import { images } from '../../constants';
import Pdf from '../../assets/Shuvo.pdf';
import './Header.scss';
import AppWrap from '../../wrapper/AppWrap';

export const Header = () => {
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {
    const query = '*[_type == "profileImage"]';
    
    client.fetch(query)
      .then((data) => {
        setProfileImage(data);
      })
  }, [])
  
  const scaleVariants = {
    whileInView:{
      scale: [0,1],
      opacity: [0,1],
      transition: {
        duration: 1, 
        ease: 'easeInOut'
      }
    }
  }
  return (
    <div className='app__header app__flex'> 
        <motion.div whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.8}}
        className="app__header-info"
        >
          <div className='app__header-badge'>
            <div className='badge-cmp app__flex' > 
              <span>👋</span>
              <div style={{marginLeft: 20}}>
                <p className='p-text'>Hello, I am</p>
                <h1 className='head-text'>Shuvo</h1>
              </div>
            </div>
            <div className='tag-cmp app__flex'>
              <p className='p-text'>Web Developer</p>
              <p className='p-text'>Email Marketer</p>
              <p className='p-text'>Freelancer</p>
              
            </div>
            <div className='badge-cmp2 app__flex' > 
              <div style={{marginLeft: 10}}>
                {/* <h1 className='head-text'><a href = {Pdf} target = "_blank"/>Resume</h1> */}
                <a className='head-text' href = {Pdf} target = "_blank" style={{textDecoration: 0}}>Resume</a>
              </div>
            </div>
          </div>
        </motion.div>
              
        <motion.div 
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.7, delayChildren: 0.5}}
        className="app__header-img"
        >
          {profileImage?.map((image, index) => <img src={urlFor(image.imgUrl)} alt={image.name} key={index} />)}
          <motion.img
          whileInView={{scale: [0, 1]}}
          transition={{duration: 1, ease: 'easeInOut'}}
          className="overlay_circle"
          src={images.circle}
          alt='profile_circle'
          />
        </motion.div>

        <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
        >
          {[images.javascript, images.react, images.css].map((circle, index) => (
            <div className='circle-cmp app__flex' key={`circle-index`}>
              <img src={circle} alt='circle'/>
            </div>
          ))}
        </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');
