/**
 * Created by jiangtingqiang(jiangtingqiang@gmail.com) on 2017-06-28.
 */

import { requestWithAction } from '../common/XHRClient';
import { getAnalysis } from "../action/BookAnalysisAction";
import globalConfig from "../global.config.json";

export function getAnalysisImpl() {
    const config = {
        method: 'get',
        url: globalConfig.apiServerUrl + '/dolphin/spider-monitor/api/v1/analysis/list',
    };
    return requestWithAction(config, getAnalysis);
}