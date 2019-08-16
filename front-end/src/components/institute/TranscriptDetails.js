import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { verifyTranscriptOnBlockchain } from '../../blockchain/callProxyb'


const TranscriptDetails = (props) => {
    const {transcript} = props;

    this.state = {
        result: ''
    }
    const verifyTranscript = () => {
        let obj = {
            studentName: transcript.studentName,
            studentId: transcript.studentId,
            credential: transcript.credential,
            program: transcript.program,
            major: transcript.major,
            minReqProgramGPA: transcript.minReqProgramGPA,
            actualProgramGPA: transcript.actualProgramGPA,
            collegeName: transcript.collegeName,
            instituteId: transcript.instituteId,
            entryTerm: transcript.entryTerm,
            endTerm: transcript.endTerm,
            courseName: transcript.courseName,
            courseCode: transcript.courseCode,
            courseGrade: transcript.courseGrade,     
            courseTerm: transcript.courseTerm
        }

        let result = verifyTranscriptOnBlockchain(obj, props.location.state.instituteAddress, transcript.signature)
        this.setState({
            result: result
        })
    }

    if (transcript){
        // console.log(transcript.createdAt.toDate())
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

                <p align="right">
                    <label>{this.state.result}</label>
                    <button className="btn waves-effect waves-light" onClick={verifyTranscript}>
                        Verify
                    </button>
                </p>
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