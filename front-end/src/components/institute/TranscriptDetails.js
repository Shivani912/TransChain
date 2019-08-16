import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'


const TranscriptDetails = (props) => {
    const {transcript} = props;
    // console.log(transcript)

    if (transcript){
        console.log(transcript.createdAt.toDate())
        return(
            <div className="container section">
                {/* <h5 className="teal-text text-lighten-3">Transcript </h5> */}
                <div className="card teal lighten-3" >
                    <div className="card-content white-text">
                        <span className="card-title">ID - {props.match.params.id}</span>

                        <span className="card-text">Student Name - {transcript.studentName} </span><br/>
                        <span className="card-text">Student ID - {transcript.studentId} </span><br/>
                        <span className="card-text">College - {transcript.collegeName} </span><br/>

                        <span className="card-text">Credential - {transcript.credential} </span><br/>
                        <span className="card-text">Program - {transcript.program} </span><br/>
                        <span className="card-text">Major - {transcript.major} </span><br/>
                        <span className="card-text">Minimum Required Program GPA - {transcript.minReqProgramGPA} </span><br/>
                        <span className="card-text">Actual Program GPA - {transcript.actualProgramGPA} </span><br/>
                        <span className="card-text">Entry Term - {transcript.entryTerm} </span><br/>
                        <span className="card-text">End Term - {transcript.endTerm} </span><br/>

                        <span className="card-text">Course Name - {transcript.courseName} </span><br/>
                        <span className="card-text">Course Code - {transcript.courseCode} </span><br/>
                        <span className="card-text">Course Grade - {transcript.courseGrade} </span><br/>
                        <span className="card-text">Course Term - {transcript.courseTerm} </span><br/>

                        <span className="card-text">Date Added - {transcript.createdAt.toDate().toString()} </span><br/>
                        
                    </div>
                </div>

                {/* <button>

                </button> */}
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