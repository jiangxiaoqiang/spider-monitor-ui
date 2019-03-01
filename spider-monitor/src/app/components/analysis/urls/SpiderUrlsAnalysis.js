import React, { Component } from 'react';
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend
} from "bizcharts";
import { getUrlsAnalysisImpl } from '../../../service/UrlsAnalysisService';
import { connect } from 'react-redux';
import {getUrlsAnalysis} from '../../../action/SpiderUrlsAnalysisAction';
import DataSet from "@antv/data-set";
import _ from 'lodash';

class SpiderUrlsAnalysis extends Component {

  componentWillMount() {
    getUrlsAnalysisImpl();
  }

  render() {
    const urlsAnalysis = this.props.urlsAnalysis;
    //const data = urlsAnalysis;
    console.log("urlsAnalysis:" + JSON.stringify(urlsAnalysis))

    var result = _.chain(urlsAnalysis)
    .groupBy("spiderName")
    .map(function(currentItem){
      return {
        name: "1",
        value: "2"
      }
    })
    .value;


    const data = [
      {
        analysisTimestamp: "Jan",
        Tokyo: 7.0,
        London: 3.9
      },
      {
        analysisTimestamp: "Feb",
        Tokyo: 6.9,
        London: 4.2
      }
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.transform({
      type: "fold",
      fields: ["Tokyo", "London"],
      // 展开字段集
      key: "city",
      // key字段
      value: "temperature" // value字段
    });
    console.log(dv);
    const cols = {
      month: {
        range: [0, 1]
      }
    };
    return (
      <div>
        <Chart height={400} data={dv} scale={cols} forceFit>
          <Legend />
          <Axis name="month" />
          <Axis
            name="temperature"
            label={{
              formatter: val => `${val}°C`
            }}
          />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom
            type="line"
            position="analysisTimestamp*temperature"
            size={2}
            color={"city"}
          />
          <Geom
            type="point"
            position="analysisTimestamp*temperature"
            size={4}
            shape={"circle"}
            color={"city"}
            style={{
              stroke: "#fff",
              lineWidth: 1
            }}
          />
        </Chart>
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

