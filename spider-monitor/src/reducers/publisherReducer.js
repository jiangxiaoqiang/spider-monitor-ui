import {fromJS} from 'immutable';
import {publisherType} from "../type/PublisherType";

const initState = {};

const publisherReducer = (state = fromJS(initState), action) => {
    switch (action.type) {
        case publisherType.GET_ALL_PUBLISHERS:
            state = {
                ...action.publisher
            };
            break;
        default:
            break;
    }
    return state;
};

export default publisherReducer;