import { combineReducers } from 'redux';

import count from './reducer/CountReducer';
import hello from './reducer/BookAnalysisReducer';

const rootReducer = combineReducers({
    count,
    hello
})

export default rootReducer;