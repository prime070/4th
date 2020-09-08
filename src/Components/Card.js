import React from 'react';

const Card = ({id, name, email}) => {
    return (
        <div className='dib ba bw3 ma2 pa2 bg-light-blue grow shadow-5'>
            <img className='ba bw2 bg-light-yellow'
            alt='robots' src={`https://robohash.org/${id}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>

    )
}

export default Card 