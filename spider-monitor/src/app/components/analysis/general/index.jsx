import React, { Component } from 'react';

import SubTitle from '../subTitle';
import Utils from '../../../utils';
import { connect } from 'react-redux';
import { getAnalysis } from '../../../action/BookAnalysisAction';
import './index.scss';
import { getAnalysisImpl } from '../../../service/BookAnalysisService';
import _ from 'lodash';

const { formatterNumber } = Utils;

class General extends Component {

  componentWillMount() {
    getAnalysisImpl();
  }

  render() {
    const analysis = this.props.analysis;
    const data = analysis;
    var result = _.orderBy(analysis, ['analysisTimestamp'],['desc']);
    var topElements = result[0];
    console.log("analysis board:" + JSON.stringify(topElements));
    return (
      <div className="trading-volumn-ranking">
        <SubTitle text="当前基础库书籍总数" />
        <div className="all-account-num">
          <div className="all-account-triangle" />
          {formatterNumber(topElements === undefined?0:topElements.bookTotalElements)}
        </div>
        <div className="table-container">
          {
            [
              { title: '当日新增书籍数量', num: formatterNumber(topElements === undefined?0:topElements.todayElements) },
              { title: '当日已爬取URL数', num: formatterNumber(topElements === undefined?0:topElements.todayScrapyUrlsCount) },
              { title: '当前活跃节点数', num: formatterNumber(3) },
              { title: '待爬取URL数', num: formatterNumber(topElements === undefined?0:topElements.readyUrlsCount) },
            ].map((item, index) => (
              <div className="table-detial" key={index}>
                <p className="desc-name">{item.title}</p>
                <span className="desc-num">{item.num}</span>
              </div>
            ))
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(General);

