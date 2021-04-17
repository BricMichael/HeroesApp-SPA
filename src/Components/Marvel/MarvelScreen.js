import React from 'react'
import HeroesList from '../Heroes/HeroesList';

const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel view</h1>
            <hr />
            <HeroesList publisher='Marvel Comics' />
        </div>
    )
}

export default MarvelScreen;