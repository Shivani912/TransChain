export const registration = (newInstitute) =>{
    return(dispatch, getState,{ getFirebase,getFirestore }) =>{
        // make async call to FireStore database
        
        const firestore = getFirestore();
        firestore.collection('institutions').doc(newInstitute.ins_id).set({
            ...newInstitute,
            createdAt: new Date()
        }).then((docRef) => {
            // alert("Use this ID to log in: " + docRef.id);
    
            // console.log("Institute Added with ID: ", docRef.id);
            dispatch({type:'ADD_INSTITUTE',newInstitute:newInstitute});
            // window.location.href('/instituteDetails/' + docRef.id)
        }).catch((err) => {
            dispatch({type:'ADD_INSTITUTE_ERROR',err});
        })
    }
};
