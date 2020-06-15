import React from 'react';
import Img from '../images/illustration-your-users.svg';

const Users = () => {
  return (
    <main>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#F6FBFF'
          fill-opacity='1'
          d='M0,224L48,192C96,160,192,96,288,64C384,32,480,32,576,42.7C672,53,768,75,864,101.3C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>

      <div className='users'>
        <div className='content container mt-5'>
          <div className='row'>
            <div className='col-md-6'>
              <h3>your users</h3>
              <p className='mt-4'>
                It takes no time at all to integrate Huddle with your app's
                authentication solution. This means, once signed in to your app,
                your users can start chating immediately.
              </p>
            </div>

            <div className='col-md-6'>
              <img src={Img} alt='bg-img' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>

      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#F6FBFF'
          fill-opacity='1'
          d='M0,224L48,192C96,160,192,96,288,64C384,32,480,32,576,42.7C672,53,768,75,864,101.3C960,128,1056,160,1152,170.7C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
        ></path>
      </svg>
    </main>
  );
};

export default Users;
