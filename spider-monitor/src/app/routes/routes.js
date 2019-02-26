import React from "react";
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import {getUrlsAnalysis} from '../action/SpiderUrlsAnalysisAction';
import SpiderUrlsAnalysis from '../components/analysis/urls/SpiderUrlsAnalysis';


const routes = (
    <BrowserRouter>        
        <Switch>
          <Route path="/analysis/urls" render={(props) => <SpiderUrlsAnalysis {...props} />}/>
        </Switch>
      </BrowserRouter>
);

export default routes;