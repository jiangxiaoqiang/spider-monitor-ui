export function getUrlsAnalysis(urlsAnalysis) {
  return {
      type: "GET_SPIDER_URLS_ANALYSIS",
      urlsAnalysis: urlsAnalysis
  };
}

export function getReadyToScrapyCount(count){
  return {
    type : "GET_READY_TO_SCRAPY_CONT",
    count : count
  };
}
