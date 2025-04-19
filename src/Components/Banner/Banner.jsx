import React from 'react';
import bannerImg from '../../assets/images/banner-main.png';
import backgroundImg from '../../assets/images/bg-shadow.png'
import Button from '../Utils/Button';
import Img from '../Utils/Img';
import PropTypes from 'prop-types';


function Banner({handleClick}) {
  const bgStyle = {
    backgroundColor: '#131A20', 
    backgroundImage: `url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    color: '#fff',
  };

  const btnDesign = {
    backgroundColor: '#E7FE29',
    color: '#131A20',
    border: '1px solid #E7FE29',
    borderRadius: '8px',
  }
  return (
    <div className="text-center mt-4 py-10 rounded-2xl px-2" style={bgStyle}>
      {/* image section */}
      <div className='flex justify-center items-center'>
          <Img getImg={bannerImg} classd='w-[40%] md:w-2/10' alt="banner image" />
      </div>
      {/* text section */}
      <div className='mt-4 md:mt-5 lg:mt-6'>
        <h2 className='font-bold text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
        <h5 className='font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mt-2'>Beyond Boundaries Beyond Limits</h5>
      </div>
      <div className='border border-[#E7FE29] w-fit p-1 md:p-2 rounded-xl mx-auto mt-3 md:mt-4'>
        <Button btnDesign={btnDesign} handleClick={handleClick}> Claim Free Credit </Button>
      </div>
     
    </div>
  )
};
Banner.propTypes = {
  handleClick: PropTypes.func,
};

export default Banner

