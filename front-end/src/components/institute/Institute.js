import React, { Component } from 'react'
import Registration from './Registration'
import ChooseInstitute from './ChooseInstitute'

class Institute extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Registration/>
                    </div>
                    <div className="col s12 m6">
                        <ChooseInstitute/>
                    </div>
                </div>
            </div>        
            )
    }
}

export default Institute