import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, btnDesign, handleClick}) => {
    return (
        <div className=''>
            <button type="button" className='rounded-lg text-base font-semibold px-4 py-3' onClick={handleClick} style={btnDesign}>{children}</button>
        </div>
    );
};

Button.propTypes = {
    child: PropTypes.node.isRequired,
    design: PropTypes.object,
    handleClick: PropTypes.func
}

export default Button;