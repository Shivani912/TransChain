import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const TranscriptDetails = (props) => {
    const {transcript} = props;
    // console.log(transcript)

    if (transcript){
        return(
            <div className="container section">
                <div className="card z-depth-0">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">Transcript Id - {transcript.transcriptID}</span>
                        <span className="card-text">Transcript Date - {transcript.transcriptDate} </span><br/>
                        <span className="card-text">Student Id - {transcript.studentID} </span><br/>
                        <span className="card-text">Student Name - {transcript.studentName} </span><br/>
                        <span className="card-text">Program Name - {transcript.programName} </span><br/>
                        <span className="card-text">Details of Marks - {transcript.marksDetails} </span><br/>
                        <span className="card-text">Certified by Institution - {transcript.instituteId} </span>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="container center">
                <p>Loading Transcript ...</p>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    // console.log(ownProps);
    const id = ownProps.match.params.id;
    // const id = 'HXsnTzJJQr7GFckYYI4a123';
    const transcripts = state.firestore.data.transcripts;
    const transcript = transcripts ? transcripts[id] : null
    // console.log(transcript)
    return{
        transcript: transcript
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'transcripts' }
    ])
)(TranscriptDetails)