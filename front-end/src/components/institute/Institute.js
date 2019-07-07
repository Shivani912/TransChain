import React, { Component } from 'react'
import Registration from './Registration'
import ChooseInstitute from './ChooseInstitute'
import AddTranscript from './AddTranscript'
import ShowTranscripts from './ShowTranscripts'
import { connect } from 'react-redux'

class Institute extends Component {
    render() {
        // console.log(this.props)
        const {transcripts} = this.props;
        // console.log(transcripts);

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
                <div className="row">
                    <div className="col s12 m6">
                        <AddTranscript/>
                    </div>
                    <div className="col s12 m6">
                        <ShowTranscripts transcripts={transcripts} />
                    </div>
                </div>
            </div>        
            )
    }
}

const mapStateToProps = (state)=>{
    return{
        transcripts: state.transcript.transcripts
    }
}
export default connect(mapStateToProps)(Institute)