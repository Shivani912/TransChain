export const addTranscript = (transcript, id) =>{
    return(dispatch, getState,{ getFirebase,getFirestore }) =>{
        // make async call to FireStore database
        const firestore = getFirestore();
        firestore.collection('transcripts').doc(id).set({
            ...transcript,
            createdAt: new Date()
        }).then((docRef) => {
            // console.log("Transcript written with ID: ", docRef.id);
            dispatch({type:'ADD_TRANSCRIPT',transcript:transcript});
        }).catch((err) => {
            dispatch({tyre:'ADD_TRANSCRIPT_ERROR',err});
        })
    }
};