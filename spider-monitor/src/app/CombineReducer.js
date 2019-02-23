import { combineReducers } from 'redux';

import count from './reducer/CountReducer';
import bookAnalysis from './reducer/BookAnalysisReducer';

const rootReducer = combineReducers({
    count,
    bookAnalysis
})

export default rootReducer;