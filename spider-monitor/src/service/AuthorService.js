/**
 * Created by jiangtingqiang(jiangtingqiang@gmail.com) on 2017-06-28.
 */

import { request, requestWithAction } from '../common/XHRClient';
import { createAuthor } from "../actions/authorActions";
import globalConfig from "../global.config.json";

export function addAuthor(author) {
    const config = {
        method: 'post',
        url: globalConfig.apiServerUrl + '/dolphin/api/author',
        data: author
    };
    return requestWithAction(config, createAuthor);
}