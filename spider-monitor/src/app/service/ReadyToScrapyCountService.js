import { getReadyToScrapyCount } from "../action/ReadyToScrapyAction";
import globalConfig from "../global.config.json";
import { requestWithAction } from '../common/XHRClient';

export function getReadyToScrapyCountImpl(){
    const config = {
        method: 'get',
        url: globalConfig.apiServerUrl + '/dolphin/spider-monitor/api/v1/urlsPool/readyToScrapyCount',
    };
    return requestWithAction(config,getReadyToScrapyCount);
}
