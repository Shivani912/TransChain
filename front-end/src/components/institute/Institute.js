import React, { Component } from 'react'
import Registration from './Registration'
import ChooseInstitute from './ChooseInstitute'
import AddTranscript from './AddTranscript'

class Institute extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m5">
                        <Registration/>
                    </div>
                    <div className="col s12 m5 offset-m2">
                        <ChooseInstitute/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m5">
                        <AddTranscript/>
                    </div>
                </div>
            </div>        
            )
    }
}

export default Institute