import { combineReducers } from 'redux';

import analysis from './reducer/BookAnalysisReducer';
import urlsAnalysis from './reducer/UrlsAnalysisReducer';
import readyToScrapyCount from './reducer/ReadyToScrapyCountReducer';

const rootReducer = combineReducers({
    analysis,
    urlsAnalysis,
    readyToScrapyCount
})

export default rootReducer;