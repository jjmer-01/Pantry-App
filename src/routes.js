import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Auth from './components/Auth/Auth'
import Register from './components/Register/Register'
import Pantry from './components/Pantry/Pantry'
import ShopList from './components/ShopList/ShopList'

export default (
    <Switch>
        <Route exact path='/' component={Auth} />
        <Route path='/register' component={Register} />
        <Route path='/pantry' component={Pantry} />
        <Route path='/shop-list' component={ShopList} /> 
    </Switch>
)