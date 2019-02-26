import React, { Component } from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";
import { getUrlsAnalysisImpl } from '../../../service/UrlsAnalysisService';
import { connect } from 'react-redux';
import {getUrlsAnalysis} from '../../../action/SpiderUrlsAnalysisAction';


class SpiderUrlsAnalysis extends Component {

  componentWillMount() {
    getUrlsAnalysisImpl();
  }

  render() {
    const urlsAnalysis = this.props.urlsAnalysis;
    const data = urlsAnalysis;
    console.log("urlsAnalysis:" + JSON.stringify(urlsAnalysis))
    const cols = {
      "书籍总数": {
        min: 0
      },
      analysisTimestamp: {
        range: [0, 1]
      }
    };
    return (
      <div className="container">
        <div>
          <Chart height={500} data={data} scale={cols} forceFit>
            <span className='main-title'>
              书籍总数
            </span>
            <Axis title="time" name="时间" />
            <Axis name="书籍总数" />
            <Tooltip
              crosshairs={{
                type: "y"
              }}
            />
            <Geom type="line" position="analysisTimestamp*bookTotalElements" size={2} />
            <Geom
              type="point"
              position="analysisTimestamp*bookTotalElements"
              size={4}
              shape={"circle"}
              style={{
                stroke: "#fff",
                lineWidth: 1
              }}
            />
          </Chart>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  urlsAnalysis: state.urlsAnalysis
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUrlsAnalysis:(urlsAnalysis) => {
      dispatch(getUrlsAnalysis(urlsAnalysis))
    }
  };
};

// connect is a Currying function
export default connect(mapStateToProps, mapDispatchToProps)(SpiderUrlsAnalysis);

