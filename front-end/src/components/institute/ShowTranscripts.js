import React from 'react' 
import TranscriptSummary from './TranscriptSummary'
import { Link } from 'react-router-dom'

const ShowTranscripts = ({transcripts}) => {
    return(
        <div>
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

export default ShowTranscripts