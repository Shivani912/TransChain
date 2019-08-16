import React from 'react' 

const TranscriptSummary = ({transcript}) => {
    // console.log(transcript)
    return(
        <div className="card z-depth-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{transcript.id}</span>
                {/* <span className="card-text">{transcript.transcriptDate} </span> */}
                 <span className="card-text">{transcript.studentId} </span>
                {/* <span className="card-text">{transcript.studentName} </span>
                <span className="card-text">{transcript.program} </span> */}
                {/* <span className="card-text">{transcript.marksDetails} </span> */}
                {/* <span className="card-text">{transcript.instituteId} </span> */} 
            </div>
        </div>
    )
}

export default TranscriptSummary