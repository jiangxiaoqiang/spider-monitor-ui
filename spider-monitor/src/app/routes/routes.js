import React from "react";
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import SpiderUrlsAnalysis from '../components/analysis/urls/SpiderUrlsAnalysis';
import BookAnalysis from '../components/analysis/book/BookAnalysis';
import DashboardAnalysis from '../components/analysis/dashboard/DashboardAnalysis';

const routes = (
    <BrowserRouter>        
        <Switch>
          <Route path="/analysis/dashboard" exact render={(props) => <DashboardAnalysis {...props} />}/>
          <Route path="/analysis/url" exact render={(props) => <SpiderUrlsAnalysis {...props} />}/>
          <Route path="/analysis/book" exact render={(props) => <BookAnalysis {...props} />}/>
        </Switch>
      </BrowserRouter>
);

export default routes;