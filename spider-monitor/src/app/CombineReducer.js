import { combineReducers } from 'redux';

import count from './reducer/CountReducer';
import analysis from './reducer/BookAnalysisReducer';
import urlsAnalysis from './reducer/UrlsAnalysisReducer';

const rootReducer = combineReducers({
    count,
    analysis,
    urlsAnalysis
})

export default rootReducer;