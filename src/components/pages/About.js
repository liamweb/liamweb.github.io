import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../Button'
import '../../App.css'

export default function About() {
  return <div className="about-a">
          <h1 className='about'>ABOUT ME</h1>
          <div className='container'>
            <h1 className='inner-heading'>
              Let me tell you a little about myself and what I do...
            </h1>
            <div className="about-info">
              <img src={"images/liam1.jpg"} alt="Liam Moir" className="bio-image" />
              <div className="bio bg-dark">
                <p>
                Hi, I'm Liam. 
                </p>
                <p>
                  I'm a highly motivated Front-End Developer in Loveland, Colorado 
                  with a passion for building web applications 
                  and services. I'm familiar with the development and deployment 
                  process for many web-based technologies, and value a clean design 
                  that's easy and ejoyable for the user.
                  </p>
                  <p>
                  I see web development not only as a rewarding career, 
                  but as a deep personal interest that is continuously evolving in 
                  the world of tech. I have a lot of fun working on projects and
                  love being part of a community that offers a world of resources
                  for continuous learning.
                  </p>
                  <p>
                  When I'm not coding, I enjoy spending time with my dog Oslo, 
                  playing guitar, disc golf, hiking, climbing and
                  gaming with friends.
                  </p>
              </div>
            </div>
            <div className='about-b'>
            <h1 className='inner-heading'>
              Take a look at some of my recent projects
            </h1>
            <Link to='/portfolio'>
            <Button 
              className='btns' 
              buttonSize='btn--medium'
              buttonStyle='btn--dark' 
              // buttonSize='btn--large'
              >
              Portfolio
            </Button>
            </Link>
            </div>
          </div>
        </div>;
}