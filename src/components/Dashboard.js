import React from 'react'
import '../styles/login.css'
import selector from '../images/nav-triangle.png'
import weight_chart from '../images/weight_chart.jpg'
import placeholder from '../images/placeholder.jpg'
import InfoBox from './InfoBox'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="dashboard-container">
                <nav>
                    <img id='nav-selector' src={selector}></img>
                    <div>Fitness Tracker</div>
                    <ul id="nav-links">
                        <li id='home'>Home</li>
                        <li id='profile'>Profile</li>
                        <li id='config'>Config</li>
                    </ul>
                </nav>
                <div id='dashboard-info'>
                    <InfoBox bgImage = {weight_chart}/>
                    <InfoBox bgImage = {placeholder}/>
                    <InfoBox bgImage = {placeholder}/>
                    <InfoBox bgImage = {placeholder}/>
                </div>
            </div>
        )
    }
}

export default Dashboard