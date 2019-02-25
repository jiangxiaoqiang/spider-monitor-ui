
const UrlsAnalysisReducer = (state=[], action) => {
    switch (action.type) {
        case "GET_SPIDER_URLS_ANALYSIS":
            state = action.urlsAnalysis;
            break;
        default:
            break;
    }
    return state;
};

export default UrlsAnalysisReducer;