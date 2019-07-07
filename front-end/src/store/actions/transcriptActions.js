export const addTranscript = (transcript) =>{
    return(dispatch, getState,{ getFirebase,getFirestore }) =>{
        // make async call to FireStore database
        const firestore = getFirestore();
        firestore.collection('transcripts').add({
            ...transcript,
            instituteId: 12345,
            instituteAddress: 0x12345,
            createdAt: new Date()
        }).then((docRef) => {
            console.log("Transcript written with ID: ", docRef.id);
            dispatch({type:'ADD_TRANSCRIPT',transcript:transcript});
        }).catch((err) => {
            dispatch({tyre:'ADD_TRANSCRIPT_ERROR',err});
        })
    }
};