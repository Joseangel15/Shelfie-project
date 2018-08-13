import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import BinList from './BinList/BinList';
import AddItem from './AddItem/AddItem';
import ProductView from './ProductView/ProductView';

export default (

    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={BinList} path='/BinList/:id' />
        <Route component={AddItem} path='/AddItem/:id' />
        <Route component={ProductView} path='/ProductView/:id' />
    </Switch>

)