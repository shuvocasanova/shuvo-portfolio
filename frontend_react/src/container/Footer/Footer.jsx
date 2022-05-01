import React, {useState} from 'react';
import {AppWrap, MotionWrap} from '../../wrapper';
import {images} from '../../constants';
import {client} from '../../client';
import './Footer.scss';

function Footer() {
  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message} = formData;

  const handleChangeInput = (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }
  console.log(name, email)
  const handleSubmit = () => {
    if (name === '') {
      return alert("Name field cannot be empty")
    }
    else if (!email.match(emailRegex)) {
      return alert("Email is not valid")
    }
    else if (message === '') {
      return alert("Message field cannot be empty")
    } else {
        setLoading(true);
        const contact = {
          _type: "contact",
          name: name,
          email: email,
          message: message,
      }

      client.create(contact).then(() => {
        setLoading(false)
        setIsFormSubmitted(true)
      })
    }


  }
  return (
    <>
     <h2 className='head-text'>Take a coffe & chat with me</h2>
     <div className='app__footer-cards' >
        <div className='app__footer-card'>
          <img src={images.email} alt="email" />
          <a href='mailto:shuvocasanova@gmail.com' className='p-text'>shuvocasanova@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt="mobile" />
          <a href='tel:+8801767057140' className='p-text'>+8801767057140</a>
        </div>
     </div>

    {!isFormSubmitted ?
      <div className='app__footer-form app__flex'>
        <div className='app__flex'>
          <input className='p-text' type="text"  placeholder="Your Name" name="name"value={name}  onChange={handleChangeInput}></input>
        </div>
        <div className='app__flex'>
          <input className='p-text' type="email" placeholder="Your Email" name="email"value={email} onChange={handleChangeInput}></input>
        </div>
        <div>
          <textarea
          className='p-text'
          placeholder='Your Message'
          value={message}
          name="message"
          onChange={handleChangeInput}
          />
        </div>
        <button type='submit' className='p-text' onClick={handleSubmit}> { loading ? 'Sending' : 'Send Message'}</button>
     </div> 
    : <div>
      <h3 className='head-text'>Thank you for getting in touch!</h3>
    </div> 
    } 
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, "app__footer"), 
  "contact",
  "app__whitebg"
  )