import React from 'react' 
import TranscriptDetails from './TranscriptDetails'

const ShowTranscripts = ({transcripts}) => {
    return(
        <div>
            {transcripts && transcripts.map(transcript =>{
                return(
                    <TranscriptDetails transcript={transcript} key={transcript.id} />
                )
            })}
        </div>
    )
}

export default ShowTranscripts