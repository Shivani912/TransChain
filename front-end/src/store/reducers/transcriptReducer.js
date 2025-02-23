const initState = {
    // transcripts:[
    //     {id:'1', transcriptID: 'T1', transcriptDate: 'D1', studentID: 'S1',
    //     studentName: 'SN1', programName: 'P1', marksDetails: 'M1'},
    //     {id:'2', transcriptID: 'T2', transcriptDate: 'D2', studentID: 'S2',
    //     studentName: 'SN2', programName: 'P2', marksDetails: 'M2'},
    //     {id:'3', transcriptID: 'T3', transcriptDate: 'D3', studentID: 'S3',
    //     studentName: 'SN3', programName: 'P3', marksDetails: 'M3'}
    // ]
}

const transcriptReducer = (state = initState,action) => {
    switch(action.type){
        case 'ADD_TRANSCRIPT':
            console.log("Added Transcript", action.transcript);
            return state;
        case 'ADD_TRANSCRIPT_ERROR':
            console.log("Error Adding Transcript", action.err);
            return state;
        default:
            return state;
    }
}

export default transcriptReducer