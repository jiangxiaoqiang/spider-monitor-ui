import React, { Component } from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";
import { getAnalysisImpl } from '../../../service/BookAnalysisService';
import { connect } from 'react-redux';
import {getAnalysis} from '../../../action/BookAnalysisAction';

class BookAnalysis extends Component {

  componentWillMount() {
    getAnalysisImpl();
  }

  render() {
    const analysis = this.props.analysis;
    const data = analysis;
    console.log("analysis:" + JSON.stringify(analysis))
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
  analysis: state.analysis
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAnalysis:(analysis) => {
      dispatch(getAnalysis(analysis))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookAnalysis);

