import React from 'react';
import Img from '../images/illustration-grow-together.svg';

const GrowTogther = () => {
  return (
    <>
      <main className='curve'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#F6FBFF'
            fill-opacity='1'
            d='M0,64L80,96C160,128,320,192,480,186.7C640,181,800,107,960,80C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
          ></path>
        </svg>

        <div className='grow'>
          <div className='content container mt-5'>
            <div className='row'>
              <div className='col-md-6'>
                <h3>grow together</h3>
                <p className='mt-4 pr-lg-5'>
                  generate meaniingful discussion with your audience and build a
                  strong loyal community. Think of the insightful conversations
                  you missed out on with a feedback form
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
            d='M0,192L80,165.3C160,139,320,85,480,90.7C640,96,800,160,960,165.3C1120,171,1280,117,1360,90.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z'
          ></path>
        </svg>
      </main>
    </>
  );
};

export default GrowTogther;
