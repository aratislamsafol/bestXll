import React, { useEffect, useState } from 'react'
import Img from '../Utils/Img';
import logo from '../../assets/images/logo.png';
import Menu from '../Menu/Menu';
import Button from '../Utils/Button';
import PropTypes from 'prop-types';
import Humburger from '../Humburger/Humburger';
import useIsMobile from '../CreateHook/useIsMobile';

const Header = ({amounts}) => {
    const isMobile = useIsMobile();
    const [isActive, setIsActive] = useState(!isMobile);
    
    useEffect(() => {
        setIsActive(!isMobile); 
      }, [isMobile]);

    const handelBurger = () => {
        if (isMobile) {
          setIsActive(prev => !prev);
        }
    };
    const design = {};
    const btnDesign = {
        border: '1px solid #ececec',
        whiteSpace: 'nowrap'
    }
    const imgDesign = {}
    
  
  return (
    <div className='flex justify-between items-center mt-3 sm:mt-4 md:mt:8 lg:mt-12 flex-wrap md:flex-nowrap'>
        {/* logo section */}
        <div className='w-1/2 md:order-1'>
            <Img getImg={ logo } imgDesign={imgDesign}></Img>
        </div>
        {/* button */}
        <div className='w-1/2 md:w-fit md:ms-8 md:order-3 flex gap-2 items-center justify-end'>
            <Button btnDesign={btnDesign}>{amounts} Coin</Button>
            <Humburger handelBurger={handelBurger}></Humburger>
        </div>
        {/* menu */}
        <div className='w-full md:order-2 md:justify-items-end mt-3 md:mt-0'>
            {isActive && <Menu isActive={isActive} design={design}></Menu>}
        </div>
    </div>
  )
};

Header.propTypes = {
    amounts: PropTypes.number.isRequired
}


export default Header
