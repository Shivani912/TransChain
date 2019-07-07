import authReducer from './authReducer'
import transcriptReducer from './transcriptReducer'
import registrationReducer from './registrationReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    transcript: transcriptReducer,
    firestore: firestoreReducer,
    newInstitute: registrationReducer
});

export default rootReducer