import React from 'react';
import Img from '../images/illustration-flowing-conversation.svg';

const Flow = () => {
  return (
    <>
      <div className='flow container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={Img} alt='bg-img' className='img-fluid' />
          </div>

          <div className='col-md-6 pl-lg-5'>
            <h3>flow conversations</h3>
            <p className='mt-4 '>
              generate meaniingful discussion with your audience and build a
              strong loyal community. Think of the insightful conversations you
              missed out on with a feedback form
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flow;
