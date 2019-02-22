/**
 * Created by jiangtingqiang@gmail.com on 18-4-9.
 */
import globalConfig from "../global.config.json";
import { getAllPublishers } from "../actions/publisherAction";
import { request, requestWithAction } from '../common/XHRClient';

export function findAllPublisher() {
    const config = {
        method: 'get',
        url: globalConfig.apiServerUrl + '/dolphin/api/dic/publisher/all'
    };
    return requestWithAction(config, getAllPublishers);
}