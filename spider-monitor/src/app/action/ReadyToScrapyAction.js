export function getReadyToScrapyCount(count){
    return {
      type: "GET_READY_TO_SCRAPY_COUNT",
      readyToScrapyCount: count
    };
}
