import { combineReducers } from 'redux';

import count from './reducer/CountReducer';
import bookAnalysis from './reducer/BookAnalysisReducer';
import urlsAnalysis from './reducer/UrlsAnalysisReducer';

const rootReducer = combineReducers({
    count,
    bookAnalysis,
    urlsAnalysis
})

export default rootReducer;