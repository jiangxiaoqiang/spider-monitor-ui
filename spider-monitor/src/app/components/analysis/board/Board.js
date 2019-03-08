import React, { Component } from 'react';

import Data from '../../../mock/upperData';
import Title from '../title';
import General from '../general';
import SubTitle from '../subTitle';
// chart component
import LineChart from '../charts/line';
import BarChart from '../charts/bar';
import PieChart from '../charts/pie';

import './index.scss';
import { width } from 'window-size';

const industry = {
  GoogleBook: { lastOrder: 360000, lastVolumn: 70000000 },
  DoubanBook: { lastOrder: 71000, lastVolumn: 460000000 },
  AmazonBook: { lastOrder: 29000, lastVolumn: 1900000 },
  JDBook: { lastOrder: 0, lastVolumn: 0 },
  其他: { lastOrder: 5000, lastVolumn: 3000000 },
};

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = this.process();
  }

  process() {
    const {
      volumnPriceTrend,
      volumnOrderTrend,
      businessVolumnPrice,
      businessVolumnOrder,
      proportion,
      updateTime,
      startTime,
    } = Data;
    const arr = ['GoogleBook', 'DoubanBook', 'AmazonBook', 'JDBook', '其他'];

    const volumnArr = [];
    const orderArr = [];

    for (const attr of arr) {
      for (const item of businessVolumnPrice) {
        if (item.key === attr) {
          volumnArr.push(item || {});
          volumnArr[volumnArr.length - 1].last = industry[item.key].lastVolumn;
        }
      }
      for (const item of businessVolumnOrder) {
        if (item.key === attr) {
          orderArr.push(item || {});
          orderArr[orderArr.length - 1].last = industry[item.key].lastOrder;
        }
      }
    }

    return {
      upperLineTopData: volumnPriceTrend || [],
      upperLineBottomData: volumnOrderTrend || [],
      upperBarTopData: volumnArr || [],
      upperBarBottomData: orderArr || [],
      upperPieroseData: proportion || [],
      upperUpdateTime: updateTime,
      upperStartTime: startTime,
    };
  }

  render() {
    const { upperLineTopData, upperLineBottomData, upperBarTopData, upperBarBottomData, upperUpdateTime, upperStartTime, upperPieroseData } = this.state;
    const { innerHeight,innerWidth } = window;

    const lineChartHeight = (innerHeight - 550) / 2;
    const barChartHeight = (innerHeight - 100) / 2;

    return (
      <div className="upper-container" style={{ height: innerHeight,width:innerWidth }}>
        <Title text="基础库实时数据" updateTime={upperUpdateTime} startTime={upperStartTime} />
        <div className="upper-wrapper">
          <div className="upper-left">
            <div className="trading-volumn-general">
              <div className="trading-volumn-general-seperator" />
              <div className="trading-volumn-general-text-container">
                <span className="trading-volumn-general-text">基础库概况</span>
              </div>
              <div className="trading-volumn-general-seperator" />
            </div>
            <div className="trading-volumn-detail">
              <div className="trading-volumn-detail-top">
                <General />
                <div className="trading-volumn-proportion">
                  <SubTitle text="书籍信息来源占比（各国家书籍占比）" />
                  <PieChart data={upperPieroseData} />
                </div>
              </div>
            </div>
          </div>

<<<<<<< .mine          </div>
=======>>>>>>> .theirs        </div>
      </div>
    );
  }
}