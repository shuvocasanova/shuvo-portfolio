import React, {useState, useEffect} from 'react';
import { BsLinkedin, BsGithub, BsTwitter, BsInstagram, BsSkype } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import {client} from '../client';

const SocialMedia = () => {
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        const query = '*[_type == "social"]';
        client.fetch(query)
         .then((data) => {setSocials(data)})
    }, [])
    
  return (
    <>
     {
         socials.map((social, index) => (
            <div className='app__social'
            key={social.title+index}
            >
                <div>
                    <a href={social.linkedin} target="_blank" rel='noreferrer' ><BsLinkedin /></a>
                    
                </div>
                <div>
                    <a href={social.github} target="_blank" rel='noreferrer' ><BsGithub /></a>
                </div>
                <div>
                    <a href={social.facebook} target="_blank" rel='noreferrer' ><FaFacebook /></a>
                </div>
                <div>
                    <a href={social.twitter} target="_blank" rel='noreferrer' ><BsTwitter /></a>
                </div>
                <div>
                    <a href={social.instagram} target="_blank" rel='noreferrer' ><BsInstagram /></a>
                </div>
                <div>
                    <a href={social.skype} target="_blank" rel='noreferrer' ><BsSkype /></a>
                </div>
        </div>
         ))
     }
    </>
  )

}

export default SocialMedia;