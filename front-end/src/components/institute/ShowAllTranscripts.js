import React from 'react' 
import TranscriptSummary from './TranscriptSummary'
import { Link } from 'react-router-dom'

const ShowAllTranscripts = ({transcripts}) => {
    return(
        <div>
            <h3>All Transcripts from All Institutes</h3>
            {transcripts && transcripts.map(transcript =>{
                return(
                <Link to={'/transcript/' + transcript.id} key={transcript.id} >
                <TranscriptSummary transcript={transcript} key={transcript.id} />
                </Link>
                )
            })}
        </div>
    )
}

export default ShowAllTranscripts