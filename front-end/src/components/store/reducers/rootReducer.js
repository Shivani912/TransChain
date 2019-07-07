import authReducer from './authReducer'
import transcriptReducer from './transcriptReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    transcript: transcriptReducer
});

export default rootReducer