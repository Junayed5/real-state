import React, { useEffect, useState } from 'react';
import SingleProperty from './SingleProperty';

const Property = ({properties, select, selected}) => {

    const filter = Array(selected);

    
    return (
        <div className='grid grid-cols-3 gap-y-5 mt-10 '>
            {
                select ? filter.map(property => <SingleProperty
                    key={property.id}
                    property={property}
                />) : properties.map(property => <SingleProperty
                    key={property.id}
                    property={property}
                />)
            }
        </div>
    );
};

export default Property;