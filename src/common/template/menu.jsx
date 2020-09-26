import React from 'react'
import MenuItem from './menuitem'
import MenuTree from './menutree'



export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashbord' icon='line-chart'/>
        <MenuTree label='Gerenciar usuarios' icon='id-card'>
            <MenuItem path='usuarios' label='Usuarios' icon='user-circle'/>
            <MenuItem path='Premium' label='Gerenciar contas premium' icon='diamond'/>
            <MenuItem path='Informacoes' label='Informações' icon='info-circle'/>
        </MenuTree>
        <MenuTree label='Controle' icon='money'>
            <MenuItem path='Gastoselucros' label='Gastos e Lucros' icon='usd'/>
            <MenuItem path='Metas' label='Metas' icon='calendar-check-o'/>
        </MenuTree>
        
    </ul>
)