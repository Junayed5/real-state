import React from 'react';

const Search = ({properties, handleSelect}) => {

    return (
        <div className='flex justify-between mt-10'>
            <h1 className='lg:text-4xl sm:text-xl font-bold text-gray-700'>Search property to rent</h1>

            <div className="relative inline-block w-60 text-gray-700">
                <form onChange={handleSelect}>
                    <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                        <option>Search With Search Bar</option>
                        {properties.map(p => <option key={p.id}>{p.name}</option>)}
                    </select>
                </form>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
            </div>
        </div>
    );
};

export default Search;