import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

import DcScreen from '../Components/dc/DcScreen';
import HeroesScreen from '../Components/Heroes/HeroesScreen';
import MarvelScreen from '../Components/Marvel/MarvelScreen';
import { Navbar } from '../Components/ui/Navbar';

const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path='/marvel' component={ MarvelScreen } />
                    <Route exact path='/heroe/:heroeId' component={ HeroesScreen} />
                    <Route exact  path='/dc' component={ DcScreen } />
                    <Route exact  path='/HeroesScreen' component={ HeroesScreen} />
                    <Redirect to='/marvel' />
                </Switch>
            </div>
            
        </>
    )
}

export default DashboardRouter;