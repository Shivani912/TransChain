import React from 'react' 
import TranscriptSummary from './TranscriptSummary'
import { Link } from 'react-router-dom'

const ShowTranscripts = ({transcripts, instituteId}) => {
    // console.log("ID ", instituteId)
    return(
        <div>
            {transcripts && transcripts.map(transcript =>{
                if(transcript.instituteId === instituteId){
                    return(
                    <Link to={'/transcript/' + transcript.id} key={transcript.id} >
                    <TranscriptSummary transcript={transcript} key={transcript.id} />
                    </Link>
                )
                }
                else{
                    return(
                        <div key={transcript.id}></div>
                    )
                }
            })}
        </div>
    )
}

export default ShowTranscripts