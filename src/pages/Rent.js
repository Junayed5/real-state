import React, { useEffect, useState } from 'react';
import Property from './Property';
import Search from './Search';
import Search2 from './Search2';

const Rent = () => {
    const [properties, setProperty] = useState([]);
    const [select, isSelected] = useState(false);
    const [selected, setSelected] = useState({});
    const [price, setPrice] = useState('')
    const [propertyType, setPropertyType] = useState('');
    // const [search, setSearch] = useState([]);
    // console.log(search);

    useEffect(() => {
        fetch('realEstate.json')
        .then(res=> res.json())
        .then(data => setProperty(data));
    },[])


    const handleSelect = e => {
        const value = e.target.value;
        {properties.map(p => {
            if (p.name === value) {
                setSelected(p);
                isSelected(true)
            }
        })}
        
    }

    const searchBtn = () => {
        console.log(parseInt(price), propertyType);

        properties.find(p => p.type === propertyType && console.log(p))
    }   

    return (
        <div className='lg:w-[1100px] sm:w-[414px] mx-auto'>
            <Search properties={properties} handleSelect={handleSelect}/>
            <Search2 setPrice ={setPrice} setPropertyType={setPropertyType} searchBtn={searchBtn}/>
            <Property properties={properties} select={select} selected={selected}/>
        </div>
    );
};

export default Rent;