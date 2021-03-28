import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='inner-heading'>Check out some of my projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <CardItem
              src='images/portfolio2.png'
              text='Responsive portfolio template'
              label='Portfolio Site'
              path='/portfolio'
            />
            <CardItem
              src='images/myTunes.png'
              text='ITunes mock up site'
              label='UX/UI Design'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/meditationApp.png'
              text='Meditation app with calming sounds and timer options'
              label='Meditation App'
              path='/portfolio'
            />
            <CardItem
              src='images/portfolio1.png'
              text='Responsive single-page portfolio'
              label='Portfolio Site'
              path='/portfolio'
            />
            <CardItem
              src='images/parallaxMobile.png'
              text='Interactive parallax scroll effect for mobile app'
              label='Mobile Design'
              path='/portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
