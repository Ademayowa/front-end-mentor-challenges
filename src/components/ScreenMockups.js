import React, { useState } from 'react';
import Img1 from '../images/icon-communities.svg';
import Img2 from '../images/icon-messages.svg';
import mockups from '../images/screen-mockups.svg';

const ScreenMockups = () => {
  const [messages] = useState([
    {
      id: '1',
      title: '1.4k+',
      info: 'commmunities formed',
      img: Img1,
    },
    {
      id: '2',
      title: '2.7m+',
      info: 'messages sent',
      img: Img2,
    },
  ]);

  return (
    <>
      <div className='mockups container mt-5 mb-5'>
        <div className='row'>
          <div className='col-sm-8 mx-auto'>
            <div>
              <img src={mockups} alt='screen' className='img-fluid' />
            </div>
          </div>

          {messages.map((msgs) => (
            <div className='col-lg-6 mt-4 px-5'>
              <img src={msgs.img} alt='icon' className='img-fluid mb-2' />
              <h3 className='mt-2 mb-2'>{msgs.title}</h3>
              <p className='text-muted text-capitalize'>{msgs.info}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScreenMockups;
