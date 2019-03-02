import React, { Component } from 'react';

import SubTitle from '../subTitle';
import Utils from '../../../utils';

import './index.scss';

const { formatterNumber } = Utils;

export default class General extends Component {
  render() {
    return (
      <div className="trading-volumn-ranking">
        <SubTitle text="当前基础库书籍总数" />
        <div className="all-account-num">
          <div className="all-account-triangle" />
          {formatterNumber(12345678901)}
        </div>
        <div className="table-container">
          {
            [
              { title: '当日新增书籍数量', num: formatterNumber(123456) },
              { title: '当日已爬取URL数', num: formatterNumber(3456) },
              { title: '当前活跃节点数', num: formatterNumber(3456) },
              { title: '待爬取URL数', num: formatterNumber(0) },
            ].map((item, index) => (
              <div className="table-detial" key={index}>
                <p className="desc-name">{ item.title }</p>
                <span className="desc-num">{ item.num }</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
