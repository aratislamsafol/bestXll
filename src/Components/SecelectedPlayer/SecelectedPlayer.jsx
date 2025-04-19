import React from 'react'
import PropTypes from 'prop-types'
import SelectedPlayerShow from './SelectedPlayerShow';
import Button from '../Utils/Button'; 

function SecelectedPlayer({selected, handleTabChange, removeSelected}) {
    const btnDesign = {
        backgroundColor: '#E7FE29',
        color: '#131A20',
        border: '1px solid #E7FE29',
        borderRounded: '8px',
    }
  return (
    <>
        <div className='flex flex-col gap-2 md:gap-3 lg:gap-4 mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8'>
            {
                selected.map(select => <SelectedPlayerShow select={select} removeSelected={removeSelected}/>)
            }
        </div>
        <div className='border border-[#131313] w-fit p-1 md:p-2 rounded-xl mt-3 md:mt-4'>
            <Button btnDesign={btnDesign} handleClick={()=>handleTabChange('tab1')}> Add More Players </Button>
        </div>
    </>
    
  )
}

SecelectedPlayer.propTypes = {
    selected:PropTypes.array,
    handleTabChange:PropTypes.func
}

export default SecelectedPlayer

