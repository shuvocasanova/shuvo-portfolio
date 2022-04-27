import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <FaFacebook />
        </div>
        <div>
            <BsTwitter />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia;