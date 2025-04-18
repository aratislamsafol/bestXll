import PropTypes from 'prop-types';

function Humburger({handelBurger}) {
  return (
    <button type='button' onClick={handelBurger} className='cursor-pointer w-[30px] group md:hidden'>
      <span className='w-[25px] h-[3px] rounded-4xl bg-gray-500 block mt-1 group-hover:bg-gray-800'></span>
      <span className='w-[25px] h-[3px] rounded-4xl bg-gray-500 block mt-1 group-hover:bg-gray-800'></span>
      <span className='w-[25px] h-[3px] rounded-4xl bg-gray-500 block mt-1 group-hover:bg-gray-800'></span>
    </button>
  )
}

Humburger.propTypes = {
    handelBurger:PropTypes.func
}

export default Humburger

