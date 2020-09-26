import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'


import Usuarios from '../gerenciar/usuarios'
import Dashbord from '../dashboard/dashbord'

export default props => (
    <Router>
        <Route path='/' component={Dashbord} />
        <Route path='/usuarios' component={Usuarios} />
    
    </Router>
)