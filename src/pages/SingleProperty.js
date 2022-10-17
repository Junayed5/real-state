import React from 'react';

const SingleProperty = ({ property }) => {

    const { img, name, price, address } = property

    return (
        <div className='h-96 border w-80 bg-white rounded-lg '>
            <img className='w-full' src={img} alt="" />
            <div className='pl-5 mt-5'>
                <p className='text-2xl font-bold text-indigo-500'>${price} <span className='text-sm text-gray-400'>/month</span></p>
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='text-gray-500 font-bold'>{address}</p>
            </div>
        </div>
    );
};

export default SingleProperty;