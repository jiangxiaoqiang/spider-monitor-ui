import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
} from "bizcharts";
import { getAnalysisImpl } from '../../service/BookAnalysisService';
import { getAnalysis } from '../../action/BookAnalysisAction';

class Index extends Component {

  componentWillMount() {
    getAnalysisImpl();
  }

  render() {
    const analysis = this.props.analysis;
    const data = analysis;
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

// connect is a Currying function
export default Index;
