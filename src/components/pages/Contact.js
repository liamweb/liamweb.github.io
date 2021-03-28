import React from 'react'
import { Button } from '../Button'
import '../../App.css'

export default function Contact() {
  return <div className='contact-a'>
            <h1 className='contact'>CONTACT</h1>;
            <div className='container'>
              <h1 className='inner-heading'>
                Contact me for a free quote
              </h1>
              {/* <div className='contact-form'> */}
              <form name="contact" action="https://formsubmit.co/moirweb@gmail.com" method="POST">
                <div className="text-fields">
                  <input type="text" className="text-input name-input" placeholder="Name" name="name" required />
                  <input type="text" className="text-input subject-input" placeholder="Subject" name="subject" />
                  <input type="email" className="text-input email-input" placeholder="Email Address" name="email" required />
                  <input type="text" className="text-input phone-input" placeholder="Phone Number" name="phone" />
                  <textarea className="text-input message-input" placeholder="Enter Message" name="message" required></textarea>
                </div>
                {/* <button type="submit" className="btn-dark">Submit</button> */}
                <Button 
                  className='btns' 
                  buttonSize='btn--medium'
                  buttonStyle='btn--dark' 
                  button type='submit'
                  // buttonSize='btn--large'
                  >
                  Submit
                </Button>
              </form>
              {/* </div> */}
            </div>
         </div>;
}