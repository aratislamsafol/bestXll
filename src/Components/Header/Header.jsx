import React from 'react'
import Img from '../Utils/Img';
import logo from '../../assets/images/logo.png';
import Menu from '../Menu/Menu';
import Button from '../Utils/Button';
import PropTypes from 'prop-types';

const Header = ({amounts}) => {
    const design = {
        display:'flex',
        gap: '32px', 
    };
    const btnDesign = {
        border: '1px solid #ececec',
    }
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
        {/* logo section */}
        <Img getImg={ logo }></Img>
        {/* menu */}
        <div className='flex items-center gap-8 justify-end'>
            <Menu design={design}></Menu>
            <Button btnDesign={btnDesign}>{amounts} Coin</Button>
        </div>
    </div>
  )
};

Header.propTypes = {
    amounts: PropTypes.number.isRequired
}


export default Header
