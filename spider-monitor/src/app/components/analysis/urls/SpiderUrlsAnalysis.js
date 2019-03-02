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
import { getUrlsAnalysis } from '../../../action/SpiderUrlsAnalysisAction';
import DataSet from "@antv/data-set";
import _ from 'lodash';

class SpiderUrlsAnalysis extends Component {

  componentWillMount() {
    getUrlsAnalysisImpl();
  }

  render() {
    const urlsAnalysis = this.props.urlsAnalysis;   
    var datasource = [];
    var initGroupBy = _(urlsAnalysis).groupBy('analysisTimestamp')
      .value();
    Object.keys(initGroupBy)
      .forEach(function (value) {
        var gbs = {};
        var dbs = {};
        initGroupBy[value].forEach(function (groupedValue) {
          if (groupedValue.spiderName = "google-book-spider") {
            gbs = groupedValue.unfinishedCount;
          }
          if (groupedValue.spiderName = "douban-book-spider") {
            dbs = groupedValue.unfinishedCount;
          }
        });
        var obj = {
          analysisTimestamp: value,
          googleBookSpider: gbs,
          doubanBookSpider: dbs
        };
        datasource.push(obj);
      });
    const ds = new DataSet();
    const dv = ds.createView().source(datasource);
    dv.transform({
      type: "fold",
      fields: ["googleBookSpider", "doubanBookSpider"],
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
    getUrlsAnalysis: (urlsAnalysis) => {
      dispatch(getUrlsAnalysis(urlsAnalysis))
    }
  };
};

// connect is a Currying function
export default connect(mapStateToProps, mapDispatchToProps)(SpiderUrlsAnalysis);

