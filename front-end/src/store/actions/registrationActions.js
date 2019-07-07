export const registration = (newInstitute) =>{
    return(dispatch, getState,{ getFirebase,getFirestore }) =>{
        // make async call to FireStore database
        const firestore = getFirestore();
        firestore.collection('institutions').add({
            ...newInstitute,
            // instituteId: 12345,
            // instituteAddress: 0x12345,
            createdAt: new Date()
        }).then((docRef) => {
            console.log("Institute Added with ID: ", docRef.id);
            dispatch({type:'ADD_INSTITUTE',newInstitute:newInstitute});
            // window.location.href('/instituteDetails/' + docRef.id)
        }).catch((err) => {
            dispatch({tyre:'ADD_INSTITUTE_ERROR',err});
        })
    }
};