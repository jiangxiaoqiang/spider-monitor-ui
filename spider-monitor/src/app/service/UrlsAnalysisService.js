/**
 * Created by jiangtingqiang(jiangtingqiang@gmail.com) on 2017-06-28.
 */

import { requestWithAction } from '../common/XHRClient';
import { getUrlsAnalysis,getReadyToScrapyCount } from "../action/SpiderUrlsAnalysisAction";
import globalConfig from "../global.config.json";

export function getUrlsAnalysisImpl() {
    const config = {
        method: 'get',
        url: globalConfig.apiServerUrl + '/dolphin/spider-monitor/api/v1/urlsAnalysis/list',
    };
    return requestWithAction(config, getUrlsAnalysis);
}

export function getReadyToScrapyCountImpl(){
    const config = {
        method: 'get',
        url: globalConfig.apiServerUrl + '',
    };
    return requestWithAction(config,getReadyToScrapyCount);
}
