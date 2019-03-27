const ReadyToScrapyCountReducer = (state=[], action) => {
    switch (action.type) {        
        case "GET_READY_TO_SCRAPY_COUNT":
            state = action.readyToScrapyCount;
            break;
        default:
            break;
    }
    return state;
};

export default ReadyToScrapyCountReducer;