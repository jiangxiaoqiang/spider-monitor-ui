import React, { Component } from "react";
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import {getUrlsAnalysis} from '../action/SpiderUrlsAnalysisAction';
import SpiderUrlsAnalysis from '../components/analysis/urls/SpiderUrlsAnalysis';
import UrlsAnalysisService from '../service/UrlsAnalysisService';
import App from "../components/main/App";
import Index from '../components/index/Index';
import { connect } from "echarts";
import { bindActionCreators } from "redux";

const routes = (
    <BrowserRouter>        
        <Switch>
          <App >
            <Route path="/analysis/urls" exact Component={SpiderUrlsAnalysis}/>
          </App>
        </Switch>
      </BrowserRouter>
);

export default routes;