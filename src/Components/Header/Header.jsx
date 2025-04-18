import React from 'react'
import Img from '../Utils/Img';
import logo from '../../assets/images/logo.png';
import Menu from '../Menu/Menu';
import Button from '../Utils/Button';
import PropTypes from 'prop-types';

const Header = ({amounts}) => {
    const design = {
      
    };
    const btnDesign = {
        border: '1px solid #ececec',
        whiteSpace: 'nowrap'
    }
    const imgDesign = {
        
    }
  return (
    <div className='flex justify-between items-center mt-3 sm:mt-4 md:mt:8 lg:mt-12 flex-wrap md:flex-nowrap'>
        {/* logo section */}
        <div className='w-1/2 md:order-1'>
            <Img getImg={ logo } imgDesign={imgDesign}></Img>
        </div>
        {/* button */}
        <div className='w-1/2 md:w-fit md:ms-8 md:order-3 flex gap-2 items-center justify-end'>
            <Button btnDesign={btnDesign}>{amounts} Coin</Button>
            <p className='md:hidden'>Hum</p>
        </div>

        {/* menu */}
        <div className='w-full md:order-2 md:justify-items-end mt-3 md:mt-0'>
            <Menu design={design}></Menu>
        </div>

    </div>
  )
};

Header.propTypes = {
    amounts: PropTypes.number.isRequired
}


export default Header
