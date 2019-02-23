
const BookAnalysisReducer = (state=[], action) => {
    switch (action.type) {
        case "GET_ANALYSIS":
            state = action.analysis;
            break;
        default:
            break;
    }
    return state;
};

export default BookAnalysisReducer;