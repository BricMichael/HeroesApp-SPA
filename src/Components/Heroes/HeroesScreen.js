import React from 'react'
import { Redirect, useParams } from 'react-router';
import { getHeroesById } from '../Selectors/GetHeroesById';

const HeroesScreen = () => {

    const { heroeId } = useParams();
    const getUrl = getHeroesById( heroeId );

    if ( !getUrl ){
        return <Redirect to='/' />
    }

    const {superhero, publisher, alter_ego, first_appearance, characters} = getUrl;
    
    return (
        <div className='row mt-5'>
            <div className='col-4'>
                <img src={`../assets/heroes/${heroeId}.jpg`} className='img-thumbnail' alt={superhero}/>
            </div>
            <div className='col-8'>
               <h3>{ superhero }</h3>
               <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b> Alter ego: </b>{ alter_ego }</li>
                    <li className='list-group-item'><b> Publisher: </b>{ publisher }</li>
                    <li className='list-group-item'><b> First appearance: </b>{ first_appearance }</li>
               </ul>

               <h5>Characters</h5>
               <p>{ characters }</p>

               <button className='btn btn-outline-info'>
                    Return
               </button>
            </div>
        </div>
    )
}

export default HeroesScreen;