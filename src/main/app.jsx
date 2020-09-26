import '../common/template/dependencies'
import React from 'react'

import Header from '../common/template/header'
import SideBar from '../common/template/sideBar'
import Chart from '../common/template/bar'
import Chart_1 from '../common/template/line'


export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            <div> <Chart></Chart></div>
            <div> <Chart_1></Chart_1></div>
           
            
        </div>
        
    </div>
)