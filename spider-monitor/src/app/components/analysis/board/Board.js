import React, { Component } from 'react';
import { connect } from 'react-redux';
import Data from '../../../mock/upperData';
import Title from '../title';
import General from '../general';
import SubTitle from '../subTitle';
// chart component
import LineChart from '../charts/line';
import BarChart from '../charts/bar';
import PieChart from '../charts/pie';
import { getAnalysis } from '../../../action/BookAnalysisAction';
import { getAnalysisImpl } from '../../../service/BookAnalysisService';
import './index.scss';
import { width } from 'window-size';
import _ from 'lodash';
import moment from 'moment';


const industry = {
  GoogleBook: { lastOrder: 360000, lastVolumn: 70000000 },
  DoubanBook: { lastOrder: 71000, lastVolumn: 460000000 },
  AmazonBook: { lastOrder: 29000, lastVolumn: 1900000 },
  JDBook: { lastOrder: 0, lastVolumn: 0 },
  其他: { lastOrder: 5000, lastVolumn: 3000000 },
};

class Board extends Component {

  constructor(props) {
    super(props);

    this.state = this.process();
  }

  process() {
    getAnalysisImpl();

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
    const analysis = this.props.analysis;
    var upperLineTopDataArray = [];
    _.forEach(analysis, function(element){
      var unixTimestamp = moment(element.analysisTimestamp, 'YYYY-MM-DD HH:mm:ss').unix()*1000;
      var result ={
      "time":unixTimestamp,
      "value":element.bookTotalElements
      };
      upperLineTopDataArray.push(result);
    });

    console.log("upperLineTopData:" + JSON.stringify(upperLineTopDataArray));
    var {upperLineTopData} = this.state;
    const { upperLineBottomData, upperBarTopData, upperBarBottomData, upperUpdateTime, upperStartTime, upperPieroseData } = this.state;
    if(upperLineTopDataArray !=undefined && upperLineTopDataArray.length > 0){
      upperLineTopData = upperLineTopDataArray;
    }
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
              </div>
            </div>
            <div className="trading-volumn-detail-bottom">
                <div className="detail-bottom-line-chart">
                  <SubTitle text="书籍总量趋势图" />
                  <LineChart data={upperLineTopData} height={lineChartHeight} last={300000} lastThree={900000} double11={15000000} />
                </div>               
              </div>
          </div>
         </div>
       </div>
    );
  }
}

const mapStateToProps = state => ({
  analysis: state.analysis
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAnalysis: (analysis) => {
      dispatch(getAnalysis(analysis))
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Board);
