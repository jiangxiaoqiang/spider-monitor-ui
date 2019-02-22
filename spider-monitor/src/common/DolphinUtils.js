import {Iterable} from 'immutable';
import {useRouterHistory} from 'react-router';
import {createHistory} from 'history';
import React from 'react'
import lodashDifference from 'lodash/difference';
import lodashUniq from 'lodash/uniq';
import lodashIsEqual from  'lodash/isEqual';
import lodashIsEmpty from  'lodash/isEmpty'
import qs from 'qs';

const DolphinUtils ={
    getToArray(imt, paramter) {
        if(imt == null){
            return;
        }
        return this.getToJS(imt, paramter, []);
    },
    getToObject(imt, paramter) {
        return this.getToJS(imt, paramter, {});
    },
    getToJS(imt, paramter, deft = {}) {
        const imtObj = imt.get(paramter);
        return imtObj ? imtObj.toJS() : deft;
    }
}

export default DolphinUtils;
