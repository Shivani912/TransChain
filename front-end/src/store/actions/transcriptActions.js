const _ = require("lodash")

export const addTranscript = (transcript) =>{
    return(dispatch, getState,{ getFirebase,getFirestore }) =>{
        // make async call to FireStore database
        const firestore = getFirestore();
        let obj = _.omit(transcript, ['transcriptId', 'loading', 'error'])
        firestore.collection('transcripts').doc(transcript.transcriptId).set({
            ...obj,
            createdAt: new Date()
        }).then((docRef) => {
            // console.log("Transcript written with ID: ", docRef.id);
            dispatch({type:'ADD_TRANSCRIPT',transcript:transcript});
        }).catch((err) => {
            dispatch({tyre:'ADD_TRANSCRIPT_ERROR',err});
        })
    }
};