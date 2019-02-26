import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnalysis } from '../../action/BookAnalysisAction';
import {getUrlsAnalysis} from '../../action/SpiderUrlsAnalysisAction';
import Index from '../analysis/book/BookAnalysis';
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import SpiderUrlsAnalysis from '../../components/analysis/urls/SpiderUrlsAnalysis';

class App extends Component {

  componentWillMount() {
  }

  render() {
    return (
      <BrowserRouter>        
        <Switch>
          <Route path="/index" render={(props) => <Index {...props}/>}/>
          <Route path="/analysis/urls" render={(props) => <SpiderUrlsAnalysis {...props} />}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  analysis: state.bookAnalysis,
  urlsAnalysis: state.urlsAnalysis
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAnalysis: (analysis) => {
      dispatch(getAnalysis(analysis))
    },
    getUrlsAnalysis:(urlsAnalysis) => {
      dispatch(getUrlsAnalysis(urlsAnalysis))
    }
  };
};

// connect is a Currying function
export default connect(mapStateToProps, mapDispatchToProps)(App);
