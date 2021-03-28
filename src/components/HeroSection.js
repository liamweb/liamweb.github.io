import React from 'react'
import '../App.css';
import { Button } from './Button'
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>LIAM MOIR</h1>
      <p>Front End Web Developer</p>
      <div className='hero-btns'>
        <Link to='/portfolio'>
        <Button 
        className='btns' 
        buttonStyle='btn--outline' 
        buttonSize='btn--large'
        >
          PORTFOLIO
        </Button>
        </Link>
        <Link to='/contact'>
        <Button 
        className='btns' 
        buttonStyle='btn--primary' 
        buttonSize='btn--large'
        >
          CONTACT <i className='far fa-address-book' />
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeroSection
