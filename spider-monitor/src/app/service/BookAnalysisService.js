/**
 * Created by jiangtingqiang(jiangtingqiang@gmail.com) on 2017-06-28.
 */

import { request, requestWithAction } from '../common/XHRClient';
import { getAnalysis } from "../action/BookAnalysisAction";
import globalConfig from "../global.config.json";

export function getAnalysis() {
    const config = {
        method: 'get',
        url: globalConfig.apiServerUrl + '/dolphin/api/author',
    };
    return requestWithAction(config, getAnalysis);
}