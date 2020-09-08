import React from 'react';

const SearchBox= ({searchChange}) => {
    return(
        <div className='ma2 pa2 f1'>
            <input
                className = 'tc bw3 bg-lightest-blue ba bw1'
                type='search' 
                placeholder='search your robot name'
                onChange = {searchChange}
            />
        </div>

    )
}

export default SearchBox