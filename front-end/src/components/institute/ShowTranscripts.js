import React from 'react' 
import TranscriptSummary from './TranscriptSummary'
import { Link } from 'react-router-dom'

const ShowTranscripts = ({transcripts, instituteId, instituteAddress}) => {

    return(
        <div>
            <h4 className="teal-text text-lighten-3">Uploaded Transcripts </h4>

                {transcripts && transcripts.map(transcript =>{
                    if(transcript.instituteId === instituteId){
                        return(
                        <Link to={{
                            pathname:'/transcript/' + transcript.id,  
                            state: {instituteAddress}
                        }}
                        key= {transcript.id}>
                        <TranscriptSummary transcript={transcript} key={transcript.id}/>
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
            // </div>

        // </div>
        
        // <div>
        // <h3>Transcripts Uploaded by us</h3>
        //     {transcripts && transcripts.map(transcript =>{
        //         if(transcript.instituteId === instituteId){
        //             return(
        //             <Link to={'/transcript/' + transcript.id} key={transcript.id} >
        //             <TranscriptSummary transcript={transcript} key={transcript.id} />
        //             </Link>
        //         )
        //         }
        //         else{
        //             return(
        //                 <div key={transcript.id}></div>
        //             )
        //         }
        //     })}
        // </div>
    )
}

export default ShowTranscripts