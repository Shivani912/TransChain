const initState = {
}

const registrationReducer = (state = initState,action) => {
    switch(action.type){
        case 'ADD_INSTITUTE':
            console.log("Added Institute", action.newInstitute);
            return state;
        case 'ADD_INSTITUTE_ERROR':
            console.log("Error Adding Institute", action.err);
            return state;
        default:
            return state;
    }
}

export default registrationReducer