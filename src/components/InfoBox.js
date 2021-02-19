import React from 'react'
import '../styles/login.css'

class InfoBox extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='info-container'>
                <div id='info'>
                    <img id='info-chart' src={this.props.bgImage}></img>
                </div>
            </div>
        )
    }
}

export default InfoBox