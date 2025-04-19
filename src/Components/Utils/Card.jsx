import React from 'react'
import PropTypes from 'prop-types';
import Button from './Button';
import Img from './Img'

function Card({data, handleSelected}) {
    const { img, name, country, role, battingStyle, rating, price, flag } = data;
    const imgDesign = {
        width: '100%',
        borderRadius: '20px',
        height: '240px',
        objectFit: 'cover'
    }
    const btnDesign ={
        border: '1px solid rgb(236, 236, 236)',
        padding: '6px 10px',
    }
    return (
        <div className="w-full overflow-hidden shadow-lg p-5 rounded-2xl">
            <Img imgDesign={imgDesign} getImg={img}/>
            <div className="py-4 md:py-5 mb-3 md:mb-4 border-b-2 border-gray-200">
                <div className="font-bold text-xl flex gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>{name}
                </div>
                <div className="flex justify-between mt-2">
                    {/* identity in flag , country */}
                    <div className="flex gap-2 items-center">
                        <img src={flag} className='w-8 h-6' alt="county img" />
                        <p className='text-gray-600 text-base '>{country}</p>
                    </div>
                    {/* Role */}
                    <div className='bg-stone-100 p-2 px-4 rounded-lg'>
                        <p>{role}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className='font-bold flex justify-between items-center'>
                    <p>Rating</p>{rating}
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>{battingStyle}</p>
                    {battingStyle}
                </div>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>Price: {price} </p>
                    <button type='button' style={btnDesign} onClick={()=>handleSelected(data)}>Choose Player</button>
                </div>
            
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
    handleSelected:PropTypes.func
}

export default Card

