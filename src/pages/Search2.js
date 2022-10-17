import React, { useState } from 'react';

const Search2 = ({setPrice, setPropertyType, searchBtn}) => {

    return (
        <div className='grid lg:grid-cols-5 sm:grid-cols-3 justify-between bg-white shadow-md p-5 mt-6 rounded-md px-10'>
            <div className=''>
                <p className='text-gray-600 font-semibold'>Location</p>
                <h2 className='text-xl font-bold text-gray-800'>New York, USA</h2>
            </div>
            <div className=''>
                <p className='text-gray-600 font-semibold'>When</p>
                <h2 className='text-xl font-bold text-gray-800'>Select Move-in Date</h2>
            </div>
            <div className='mx-auto'>
                <p className='text-gray-600 font-semibold'>Price</p>
                <div className="relative inline-block text-gray-700">
                    <select onChange={e => setPrice(e.target.value)} name='price' className="w-40 h-7 font-bold text-xl placeholder-gray-600 rounded-lg appearance-none" placeholder="Regular input">
                        <option>Set price</option>
                        <option>800-2500</option>
                        <option>{'2600-5000'}</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center rounded-full pointer-events-none bg-violet-200">
                        <svg className="w-4 h-4 fill-current text-violet-400" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
            <div className='mx-auto'>
                <p className='text-gray-600 font-semibold'>Property Type</p>
                <div className="relative inline-block text-gray-700">
                    <select onChange={e => setPropertyType(e.target.value)} name='type' className="w-40 h-7 font-bold text-xl placeholder-gray-600 rounded-lg appearance-none" placeholder="Regular input">
                        <option>Set Property</option>
                        <option>Houses</option>
                        <option>Duplex</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center rounded-full pointer-events-none bg-violet-200">
                        <svg className="w-4 h-4 fill-current text-violet-400" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
            <div className='mx-auto'>
                <input onClick={searchBtn} className='text-md px-4 py-2 rounded font-bold text-white mt-2 bg-indigo-600 hover:bg-indigo-500' type="submit" value="Search" />
            </div>
        </div>
    );
};

export default Search2;