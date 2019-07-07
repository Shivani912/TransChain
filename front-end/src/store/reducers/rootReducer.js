import authReducer from './authReducer'
import transcriptReducer from './transcriptReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
    auth: authReducer,
    transcript: transcriptReducer,
    firestore: firestoreReducer
});

export default rootReducer